var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var argv        = require('yargs').argv;

var runSequence =  require('run-sequence');

gulp.task( taskname, function (done) {
  if (argv.production) {
    runSequence('rev', 'rev-replace', 'clean-build', done);
  } else {
    done();
  }
});