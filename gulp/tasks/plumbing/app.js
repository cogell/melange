var gulp       = require('gulp');
var taskname   = require('path').basename(__filename, '.js');
var config     = require('./../../config')[taskname];

var sourcemaps = require('gulp-sourcemaps');
var wrap       = require('gulp-wrap');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate'); // keep uglify from mangling impliciently annotated injected strings, see "Implicit Annotation": https://docs.angularjs.org/guide/di

gulp.task( taskname, ['templates'], function () {
  return gulp.src( config.src )
    .pipe( sourcemaps.init() )
      .pipe( wrap({ src: config.wrap }) )
      .pipe( concat( config.output ) )
      .pipe( ngAnnotate() )
      // .pipe( uglify() )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( config.dest ) );
});