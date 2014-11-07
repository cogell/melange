var gulp = require('gulp');
var taskname = require('path').basename(__filename, '.js');

// continuously compile app on js changes
gulp.task( taskname, ['compile'], function () {
  gulp.watch('src/**/*.js', ['app']);
  gulp.watch('src/index.html', ['copy']);
});