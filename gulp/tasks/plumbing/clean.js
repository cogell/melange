var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config')[ taskname ];

var del      = require('del');

gulp.task( taskname , function (done) {
  del( config.src, done );
});

gulp.task( taskname + ":bin" , function (done) {
  del( './bin', done );
});

gulp.task( taskname + ":tmp" , function (done) {
  del( './.tmp', done );
});