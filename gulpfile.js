var SCSS_SRC = './assets/scss/*.scss';
var CSS_DEST = './assets/css/';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var slim = require("gulp-slim");
var sass = require('gulp-sass');

// Sassコンパイルタスク
gulp.task('sass-compile', function(){
  return gulp.src(SCSS_SRC)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(CSS_DEST));
});

// Slim ビルドタスク
gulp.task('slim', function(){
  gulp.src('views/*.slim')
    .pipe(plumber())
    .pipe(slim({
      pretty: true,
      require: 'slim/include',
      options: 'include_dirs=["views/includes"]'
    }))
    .pipe(gulp.dest(""));
});

// ウォッチ
gulp.task('default',function(){
    gulp.watch('assets/scss/*.scss',['sass-compile']);
    gulp.watch(['views/*.slim','views/includes/*.slim'],['slim']);
});
