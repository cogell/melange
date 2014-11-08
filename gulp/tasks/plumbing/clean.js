var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config')[ taskname ];

var del      = require('del');

gulp.task( taskname , function (done) {
  del( config.src, done );
});