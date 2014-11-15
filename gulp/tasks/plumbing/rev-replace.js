var gulp     = require('gulp');
var taskname = require('path').basename(__filename, '.js');
var config   = require('./../../config')[ taskname ];

var replace  = require('gulp-replace');

var relquire = require('relquire');

gulp.task( taskname, function () {

  var manifest = relquire( '~/' + config.dest + '/' + config.manifestPath  );


  return gulp.src( config.src )
    .pipe(replace(/src="(.*)"/g, manifestReplace))
    .pipe(gulp.dest( config.dest ));


  function manifestReplace (match, filename) {
    if (manifest[filename]){
      // replace everything between quotes with new filename found in manifest
      return match.replace(/"([^"]+)"/g, '"' + manifest[filename] + '"');
    }

    // if there is no match in the manifest just return the match as is
    return match;
  }

});