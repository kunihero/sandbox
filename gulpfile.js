var gulp = require('gulp');
var plumber = require('gulp-plumber');
var slim = require("gulp-slim");
var sass = require("gulp-sass");

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

gulp.task('default', function() {
  gulp.watch(['views/*.slim','views/includes/*.slim'],['slim']);
});

gulp.task("default2", function() {
    gulp.watch("assets/scss/*.scss", function(){
        gulp.src("assets/scss/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("assets/css"));
    })
});
