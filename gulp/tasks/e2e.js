var relquire   = require('relquire');

var gulp       = require('gulp');
var taskname   = require('path').basename(__filename, '.js');
var config     = require('./../config')[ taskname ];

var protractor = require('gulp-protractor').protractor;

gulp.task( taskname, ['webdriver:update', 'browser-sync:dontopen'], function () {

  return gulp.src( config.src )
    .pipe(protractor({
      configFile: relquire.resolve('~/gulp/e2e.conf'),
    }))
    .on('error', function(e) { throw e });

});


gulp.task( taskname + ':watch', [ taskname ], function () {
  gulp.watch([ config.watch ], [ taskname ]);
});