var gulp       = require('gulp');
var taskname   = require('path').basename(__filename, '.js');
var config     = require('./../config')[ taskname ];

var protractor = require('gulp-protractor').protractor;

gulp.task( taskname, ['webdriver:update', 'browserSync:dontopen'], function () {

  return gulp.src( config.src )
    .pipe(protractor({
      // annoying that the path to conf is relative to this file's local
      configFile: __dirname + './../../protractor.conf.js',
    }))
    .on('error', function(e) { throw e });

});


gulp.task( taskname + ':watch', [ taskname ], function () {
  gulp.watch([ config.watch ], [ taskname ]);
});