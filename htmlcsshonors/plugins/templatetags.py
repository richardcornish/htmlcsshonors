import random

from cactus.template_tags import register
from django.utils.encoding import force_text


def evade(value):
    """Escape a string.

    Escape string value as a numeric character reference,
    randomly either in decimal or hexadecimal form

    Example:
    {% load evade_tags %}
    {{ "me@example.com"|evade }}
    """
    string = ""
    for letter in value:
        integer = random.randint(0, 1)
        if integer == 0:
            entity = "&#%d;" % ord(letter)
        else:
            entity = "&#x%x;" % ord(letter)
        string += entity
    return force_text(string)


def preBuild(site):
    register.filter('evade', evade)
