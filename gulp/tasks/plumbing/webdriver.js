var gulp       = require('gulp');
var taskname   = require('path').basename(__filename, '.js');

var webdriverUpdate = require('gulp-protractor').webdriver_update;
var webdriverStandalone = require('gulp-protractor').webdriver_standalone;

gulp.task( taskname, ['webdriver:standalone'] );

gulp.task( taskname + ':update', webdriverUpdate );

gulp.task( taskname  +':standalone', ['webdriver:update'], webdriverStandalone);