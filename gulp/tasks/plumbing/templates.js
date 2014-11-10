var gulp      = require('gulp');
var taskname  = require('path').basename(__filename, '.js');
var config    = require('./../../config')[ taskname ];

var templateCache = require('gulp-angular-templatecache');

gulp.task( taskname, function () {

  return gulp.src( config.src )
    .pipe( templateCache({
      filename: 'templates.tmpl.js',
      module: 'templates'
    }) )
    .pipe( gulp.dest( config.dest ) );

});



