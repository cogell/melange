var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var config      = require('./../../config')[ taskname ];
var browserSync = require('browser-sync');
var extend      = require('extend');

gulp.task( taskname, function () {
  browserSync(config);
});

gulp.task( taskname + ':dontopen', function () {
  var conf = extend(config, {open: false});
  browserSync( conf );
});