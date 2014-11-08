var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var config      = require('./../../config').browserSync;
var browserSync = require('browser-sync');
var extend      = require('extend');

gulp.task( taskname, ['build'], function () {
  browserSync(config);
});

gulp.task( taskname + ':dontopen', ['build'], function () {
  var conf = extend(config, {open: false});
  browserSync( conf );
});