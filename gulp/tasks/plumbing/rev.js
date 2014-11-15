var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config')[ taskname ];

var rev  = require('gulp-rev');

gulp.task( taskname, function () {
  return gulp.src( config.src )
    .pipe(rev())
    .pipe(gulp.dest( config.dest ))
    .pipe(rev.manifest({path: config.manifestPath}))
    .pipe(gulp.dest( config.dest ));
});