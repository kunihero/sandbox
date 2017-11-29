var gulp = require('gulp');
var plumber = require('gulp-plumber');
var slim = require("gulp-slim");
 
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

