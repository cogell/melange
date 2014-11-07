var gulp     = require('gulp');
var karma    = require('karma').server;
var taskname = require('path').basename(__filename, '.js');

var task = function (watch, cb) {
  var singleRunBool = !watch;
  karma.start({
    // annoying that the path to conf is relative to this file's local
    configFile: __dirname + './../../karma.conf.js',
    singleRun: singleRunBool
  }, cb);
};

gulp.task( taskname , function (done) {
  task(false, done);
});

gulp.task( taskname + ':watch' , function (done) {
  task(true, done);
});