var gulp     = require('gulp');
var jshint   = require('gulp-jshint');
var filename = require('path').basename(__filename, '.js');

gulp.task( filename, function () {
  return gulp.src( './src/**/*.js' )
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});