var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var browserSync = require('browser-sync');

var config      = require('./../config');

// continuously compile app on js changes
gulp.task( taskname, ['browser-sync'], function () {
  gulp.watch('src/index.html', ['copy']);
  // watch and compile sass here

  gulp.watch( config.src + '**/*', function (file) {
    if (file.type === 'changed') {
      return browserSync.reload(file.path);
    }
  });
});