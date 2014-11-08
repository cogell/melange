var gulp     = require('gulp');
var jshint   = require('gulp-jshint');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config')[ taskname ];

gulp.task( taskname, function () {
  return gulp.src( config.src )
    .pipe( jshint() )
    .pipe( jshint.reporter('default') );
});