var gulp        = require('gulp');
var runSequence = require('run-sequence');

var taskname    = require('path').basename(__filename, '.js');

gulp.task( taskname, function (done) {
  // FIXME: need to add tests back in
  // runSequence(['watch', 'unit:watch'], done);
  runSequence('watch', done);
});