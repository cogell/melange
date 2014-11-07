var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config');

var concat   = require('gulp-concat');

gulp.task( taskname, function () {
  // make sure to concat all the module definition files before anything else
  gulp.src(['./src/**/*.mod.js', './src/**/*.js', '!src/**/*.test.js'])
    .pipe( concat( config.outputAppJsFile ) )
    .pipe( gulp.dest( config.outputDirectory ) );
});