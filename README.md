# HTML & CSS Honors

This repository contains the source code of the HTML & CSS Honors course website.

[http://htmlcsshonors.org](http://htmlcsshonors.org/)

[http://htmlcsshonors.s3-website-us-east-1.amazonaws.com](http://htmlcsshonors.s3-website-us-east-1.amazonaws.com)

## Install

```
mkvirtualenv htmlcsshonors
git clone git@github.com:richardcornish/htmlcsshonors.git
cd htmlcsshonors/
pip install -r requirements.txt
cd htmlcsshonors/
cactus serve
```

[127.0.0.1:8000](http://127.0.0.1:8000/)

You can also watch front-end asset changes with Gulp:

```
gulp watch
```

[localhost:3000](http://localhost:3000/)

## Deploy

```
gulp
cactus build
cactus deploy
```

## Docs

[Cactus documentation](https://github.com/eudicots/Cactus)