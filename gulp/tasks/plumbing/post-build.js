var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');

var runSequence =  require('run-sequence');

gulp.task( taskname, function (done) {
  // if (production)
  // runSequence('rev', 'rev-replace', 'clean-build', done);
  // else do nothing
  done();
});