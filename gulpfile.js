var gulp = require("gulp"),
    del = require("del"),
    stylus = require("gulp-stylus"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    imagemin = require("gulp-imagemin");

function clean(cb){
  const deletedPaths = del.sync(['source/dist/*']);
  console.log('Deleted:\n', deletedPaths.join('\n'));
  cb();
}

function cssMinify(){
  gulp.src('source/css/main.styl')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('source/dist/css'));
 };

function jsMinify(){
  gulp.src('source/js/*.js')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('source/dist/js'));
};

function imageMinify(){
  gulp.src('source/images/*.jpeg*')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(imagemin([
      imagemin.mozjpeg({quality:70, progressive: true})
    ]))
    .pipe(gulp.dest('source/dist/images'));
};

function buildAll(cb){
  cssMinify();
  jsMinify();
  imageMinify();
  cb();
}
function minImg(cb){
  imageMinify();
  cb();
}
function minCss(cb){
  cssMinify();
  cb();
}
function minJs(cb){
  jsMinify();
  cb();
}

exports.default = buildAll;
exports.clean = clean;
exports.img = minImg;
exports.css = minCss;
exports.js = minJs;