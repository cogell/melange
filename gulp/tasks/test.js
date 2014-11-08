var gulp     = require('gulp');
var karma    = require('karma').server;
var taskname = require('path').basename(__filename, '.js');

var task = function (watch, browser, cb) {
  var singleRunBool = !watch;

  karma.start({
    // annoying that the path to conf is relative to this file's local
    configFile: __dirname + './../../karma.conf.js',
    singleRun: singleRunBool,
    browsers: [ browser ]
  }, cb);
};

gulp.task( taskname , function (done) {
  task(false, 'Chrome', done);
});

gulp.task( taskname + ':watch' , function (done) {
  task(true, 'PhantomJS', done);
});

gulp.task( taskname + ':firefox' , function (done) {

  task(false, 'Firefox', done);
});

gulp.task( taskname + ':phantomjs' , function (done) {

  task(false, 'PhantomJS', done);
});