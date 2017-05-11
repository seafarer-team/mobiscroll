var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var merge = require('merge-stream');
var del = require('del');
var filename = require('gulp-asset-manifest');
var cleanCSS = require('gulp-clean-css');

// Paths to your asset files
var paths = {
    scripts: [
        "js/mobiscroll.dom.js",
        "js/mobiscroll.core.js",
        "js/mobiscroll.scrollview.js",
        "js/mobiscroll.frame.js",
        "js/mobiscroll.frame.android-holo.js",
        "js/mobiscroll.frame.ios.js",
        "js/mobiscroll.frame.jqm.js",
        "js/mobiscroll.frame.wp.js",
        "js/mobiscroll.scroller.js",
        "js/mobiscroll.android-holo-light.js",
        "js/mobiscroll.wp-light.js",
        "js/mobiscroll.mobiscroll-dark.js",
        "js/i18n/mobiscroll.i18n.zh.js"
    ],
    styles: [
        "css/mobiscroll.animation.css",
        "css/mobiscroll.icons.css",
        "css/mobiscroll.frame.css",
        "css/mobiscroll.frame.android-holo.css",
        "css/mobiscroll.frame.ios.css",
        "css/mobiscroll.frame.jqm.css",
        "css/mobiscroll.frame.wp.css",
        "css/mobiscroll.scroller.css",
        "css/mobiscroll.scroller.android-holo.css",
        "css/mobiscroll.scroller.ios.css",
        "css/mobiscroll.scroller.jqm.css",
        "css/mobiscroll.scroller.wp.css",
        "css/mobiscroll.image.css",
        "css/mobiscroll.android-holo-light.css",
        "css/mobiscroll.wp-light.css",
        "css/mobiscroll.mobiscroll-dark.css"
    ]
}

// CSS task
gulp.task('css', function() {

    // Cleanup old assets
    del(['build/css/styles-*.css'], function (err) {});

    // Prefix, compress and concat the CSS assets
    // Afterwards add the MD5 hash to the filename
    return gulp.src(paths.styles)
    .pipe(concat('mobiscroll.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));
});

// JavaScript task
gulp.task('js', function() {
    // Cleanup old assets
    del(['build/js/mobiscroll.min.js'], function (err) {});

    // Concat and uglify the JavaScript assets
    // Afterwards plugin 'gulp-rev' add the MD5 hash to the filename
    return gulp.src(paths.scripts)
    .pipe(concat('mobiscroll.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('build', ['css', 'js']);

gulp.task('watch', ['build'],  function(){
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);
