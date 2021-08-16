var gulp = require('gulp'),
    del = require('del'),
    minifyCss = require('gulp-clean-css'),
    rename = require('gulp-rename');

function clean() {
    const deletedPaths = del.sync(['public/css/main.min.css']);
    console.log('Deleted files:\n', deletedPaths.join('\n'));
  };

function cssMinify(){
  gulp.src('public/css/main.css')
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'))
 };

 function build(cb){
     clean();
     cssMinify();
     cb();
 }

exports.default = build;