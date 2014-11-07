var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config');

gulp.task( taskname , function () {
  gulp.src(['./src/index.html'])
    .pipe( gulp.dest( config.outputDirectory ) );
});