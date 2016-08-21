# HTML & CSS Honors

This repository contains the source code of the HTML & CSS Honors course website. Deployed to Amazon S3.

[http://htmlcsshonors.org](http://htmlcsshonors.org/)

[http://htmlcsshonors.org.s3-website-us-east-1.amazonaws.com](http://htmlcsshonors.org.s3-website-us-east-1.amazonaws.com/)

## Install

```
mkvirtualenv htmlcsshonors -p python3
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

[Cactus documentation](https://github.com/koenbok/cactus)