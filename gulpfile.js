var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browsersync  = require('browser-sync').create();
var cache        = require('gulp-cache');
var coffee       = require('gulp-coffee');
var concat       = require('gulp-concat');
var csscomb      = require('gulp-csscomb');
var del          = require('del');
var imagemin     = require('gulp-imagemin');
var jshint       = require('gulp-jshint');
var less         = require('gulp-less');
var cleancss     = require('gulp-clean-css');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

// Paths
var paths = {
    bower: './bower_components/',
    static: './htmlcsshonors/static/',
    templates: './htmlcsshonors/templates/',
    name: 'htmlcsshonors'
};


// Clean CSS
gulp.task('css:clean', function () {
    return del([
        paths.static + 'css/**/*.css',
        paths.static + 'css/**/*.map'
    ]);
});


// LESS
gulp.task('less', ['css:clean'], function () {
    return gulp.src([
        paths.static + 'less/**/*.less'
    ])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./', {
        includeContent: false,
        sourceRoot: '../less'
    }))
    .pipe(gulp.dest(paths.static + 'css'))
    .pipe(browsersync.stream());
});


// CSS
gulp.task('css', ['less'], function () {
    return gulp.src([
        paths.bower + 'bootstrap/dist/css/bootstrap.css',
        paths.static + 'css/**/*.css'
    ])
    .pipe(concat(paths.name + '.css'))
    .pipe(gulp.dest(paths.static + 'css'));
});


// Optimize CSS
gulp.task('css:optimize', ['css'], function () {
    return gulp.src([
        paths.static + 'css/**/*.css'
    ])
    .pipe(plumber({
        errorHandler: function (error) {
            console.log(error);
            this.emit('end');
        }
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.static + 'css'))
    .pipe(cleancss({
        advanced: false,
        keepSpecialComments: 0
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.static + 'css'));
});


// Clean JavaScript
gulp.task('js:clean', function () {
    return del([
        paths.static + 'js/**/*.js',
        paths.static + 'js/**/*.map',
        '!' + paths.static + 'js/script.js'
    ]);
});


// CoffeeScript
gulp.task('coffee', ['js:clean'], function () {
    return gulp.src([
        paths.static + 'coffee/**/*.coffee'
    ])
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write('./', {
        includeContent: false,
        sourceRoot: '../coffee'
    }))
    .pipe(gulp.dest(paths.static + 'js'));
});


// JSHint
gulp.task('jshint', ['coffee'], function () {
    return gulp.src([
        paths.static + 'js/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(paths.static + 'js'));
});


// JavaScript
gulp.task('js', ['jshint'], function () {
    return gulp.src([
        paths.bower + 'jquery/dist/jquery.js',
        paths.bower + 'bootstrap/dist/js/bootstrap.js',
        paths.static + 'js/**/*.js'
    ])
    .pipe(concat(paths.name + '.js'))
    .pipe(gulp.dest(paths.static + 'js'))
    .pipe(browsersync.stream());
});


// Optimize JavaScript
gulp.task('js:optimize', ['js'], function () {
    return gulp.src([
        paths.static + 'js/**/*.js'
    ])
    .pipe(plumber({
        errorHandler: function (error) {
            console.log(error);
            this.emit('end');
        }
    }))
    .pipe(gulp.dest(paths.static + 'js'))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.static + 'js'));
});


// Fonts
gulp.task('fonts', function () {
    return gulp.src([
        paths.bower + 'bootstrap/fonts/**/*.{eot,svg,ttf,woff,woff2}',
    ])
    .pipe(gulp.dest(paths.static + 'fonts'));
});


// Images
gulp.task('images', function () {
    return gulp.src([
        paths.static + 'img/**/*.{png,jpg,gif,bmp,ico}'
    ])
    .pipe(cache(imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
    })))
    .pipe(gulp.dest(paths.static + 'img'));
});


// Gulp watch tasks (keep it minimal)
gulp.task('watch', function () {
    browsersync.init({
        proxy: '127.0.0.1:8000',
    });
    gulp.watch([
        paths.static + 'less/**/*.less'
    ], ['css']);
    gulp.watch([
        paths.static + 'coffee/**/*.coffee',
        paths.static + 'js/script.js'
    ], ['js']);
    gulp.watch([
        paths.static + 'less/**/*.less',
        paths.static + 'coffee/**/*.coffee',
        paths.static + 'js/script.js',
        paths.templates + '*/**'
    ]).on('change', browsersync.reload);
});


// Gulp build task for deploy
gulp.task('default', [
    'css:optimize',
    'js:optimize',
    'images',
    'fonts'
]);
