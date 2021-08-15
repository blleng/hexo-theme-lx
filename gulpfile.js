var gulp = require('gulp'),
    stylus = require("gulp-stylus"),
    rename = require("gulp-rename"),
    imagemin = require("gulp-imagemin");

function stylusToMinCss(){
  gulp.src('source/css/main.styl')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('source/css'));
 };
function imageMinify(){
  gulp.src('source/images/*.jpeg*')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(imagemin([
      imagemin.mozjpeg({quality:70, progressive: true})
    ]))
    .pipe(gulp.dest('source/images'));
};

function buildAll(cb){
  stylusToMinCss();
  imageMinify();
  cb();
}
function MinImg(cb){
  imageMinify();
  cb();
}
function MinCss(cb){
  stylusToMinCss();
  cb();
}

exports.default = buildAll;
exports.img = MinImg;
exports.css = MinCss;