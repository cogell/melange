var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config')[ taskname ];

gulp.task( taskname , function () {
  return gulp.src( config.src )
    .pipe( gulp.dest( config.dest ) );
});