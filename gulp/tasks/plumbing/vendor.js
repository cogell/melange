var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config');

var concat   = require('gulp-concat');

var angular  = require.resolve('angular');

gulp.task( taskname , function () {
  gulp.src([
      angular
    ])
    .pipe( concat( config.outputVendorJsFile ) )
    .pipe( gulp.dest( config.outputDirectory ) );
});