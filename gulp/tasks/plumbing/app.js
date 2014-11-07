var gulp       = require('gulp');
var taskname   = require('path').basename(__filename, '.js');
var config     = require('./../../config');

var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate'); // keep uglify from mangling impliciently annotated injected strings, see "Implicit Annotation": https://docs.angularjs.org/guide/di

gulp.task( taskname, function () {
  // make sure to concat all the module definition files before anything else
  gulp.src(['./src/**/*.mod.js', './src/**/*.js', '!src/**/*.test.js'])
    .pipe( sourcemaps.init() )
      .pipe( concat( config.outputAppJsFile ) )
      .pipe( ngAnnotate() )
      .pipe( uglify() )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( config.outputDirectory ) );
});