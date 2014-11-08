var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var config      = require('./../../config').browserSync;
var browserSync = require('browser-sync');

gulp.task( taskname, ['build'], function () {
  browserSync(config);
});