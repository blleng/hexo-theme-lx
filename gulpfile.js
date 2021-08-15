var gulp = require('gulp'),
    stylus = require("gulp-stylus"),
    rename = require("gulp-rename");

function stylusToCss(){
  gulp.src('source/css/main.styl')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('source/css'));
 };

function build(cb) {
  stylusToCss();
  cb();
 }

exports.default = gulp.series(build);