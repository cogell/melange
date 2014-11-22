var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');

// gulp.task( taskname, ['lint', 'unit'] );
gulp.task( taskname, ['unit'] );