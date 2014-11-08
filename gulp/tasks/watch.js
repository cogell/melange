var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var browserSync = require('browser-sync');

var config      = require('./../config');

// continuously compile app on js changes
gulp.task( taskname, ['browserSync'], function () {
  gulp.watch( config.app.src, ['app']);
  gulp.watch('src/index.html', ['copy']);

  gulp.watch( config.dest + '**/*', function (file) {
    if (file.type === "changed") {
      return browserSync.reload(file.path);
    }
  });
});