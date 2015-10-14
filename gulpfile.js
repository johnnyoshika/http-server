var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {

  var watchFiles = [
   '**/*.html'
  ];

  browserSync.init(watchFiles, {
    server: {
      baseDir: "./"
    }
  });
});