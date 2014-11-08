var gulp        = require('gulp');
var runSequence = require('run-sequence');

var taskname    = require('path').basename(__filename, '.js');

gulp.task( taskname, function (done) {
  runSequence(['watch', 'test:watch'], done);
});