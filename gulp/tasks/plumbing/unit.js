var gulp     = require('gulp');
var karma    = require('karma').server;
var taskname = require('path').basename(__filename, '.js');

var relquire = require('relquire');

var task = function (watch, browser, cb) {
  var singleRunBool = !watch;

  karma.start({
    // annoying that the path to conf is relative to this file's local
    configFile: relquire.resolve('~/gulp/test.conf'),
    singleRun: singleRunBool,
    browsers: [ browser ]
  }, cb);

};

gulp.task( taskname, [/*'templates'*/], function (done) {
  task(false, 'Chrome', done);
});

gulp.task( taskname + ':watch', [/*'templates'*/], function (done) {
  task(true, 'Chrome', done);
});

gulp.task( taskname + ':firefox', [/*'templates'*/], function (done) {

  task(false, 'Firefox', done);
});

gulp.task( taskname + ':phantomjs', [/*'templates'*/], function (done) {

  task(false, 'PhantomJS', done);
});