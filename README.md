# HTML & CSS Honors

This repository contains the source code of the HTML & CSS Honors course website.

[http://htmlcsshonors.org](http://htmlcsshonors.org/)

[http://htmlcsshonors.org.s3-website-us-east-1.amazonaws.com](http://htmlcsshonors.org.s3-website-us-east-1.amazonaws.com)

## Install

```
$ mkvirtualenv htmlcsshonors
(htmlcsshonors)$ git clone git@github.com:richardcornish/htmlcsshonors.git
(htmlcsshonors)$ cd htmlcsshonors/
(htmlcsshonors)$ pip install -r requirements.txt
(htmlcsshonors)$ cd htmlcsshonors/
(htmlcsshonors)$ cactus serve
```

[127.0.0.1:8000](http://127.0.0.1:8000/)

You can also watch front-end asset changes with Gulp:

```
(htmlcsshonors)$ gulp watch
```

[localhost:3000](http://localhost:3000/)

## Deploy

```
(htmlcsshonors)$ gulp
(htmlcsshonors)$ cactus build
(htmlcsshonors)$ cactus deploy
```

## Docs

[Cactus documentation](https://github.com/eudicots/Cactus)