/*

  for each walkPath in config.templates.paths
    - walk recursively starting at that walkPath
      - at each directory check if their are *.tmpl.html files
        - if so
          - check if directory name is == template || templates
            - if so fire createTemplateModule for one level up
            - else fire createTemplateModule for current directory path
  end

  createTemplateModule(dirPath, walkPath)
    - takes the directory path an resolves it against walkPath
    - gathers up all *.tmpl.html files at the dirPath and (dirPath + "/templates")
      and (dirPath + "template")
    - create an $templateCache file for those files where the module is defined as the directory path resolved against walkPath


  GOTCHAS/NOTE:
    - need to set walk paths for every directory path that corresponds to module structures

  Example file structure:
  - src/
    - app/
      - _common/
      - components/


*/

var gulp      = require('gulp');
var taskname  = require('path').basename(__filename, '.js');
var config    = require('./../../config')[ taskname ];

var file      = require('file');
var path      = require('path');
var minimatch = require('minimatch');
var _         = require('lodash');
var Q         = require('q');
var es        = require('event-stream');

var templateCache = require('gulp-angular-templatecache');

var promises = [];

gulp.task( taskname, ['clean:tmp'], function (done) {
  templateWalk( config.src, done );
});


// walkCallback returns a promise

function templateWalk ( walkPath, done ) {

  file.walkSync( walkPath, function(dirPath, dirs, files){
    walkCallback(dirPath, dirs, files, walkPath);
  });

  Q.allSettled(promises).then(function(){
    done();
  });

}

function walkCallback (dirPath, dirs, files, walkPath) {
  var currentDir;
  var modulePath = dirPath;
  var containsTmpl = false;
  var deferred = Q.defer();

  // guard to check for templates
  containsTmpl = _.some(files, checkForTmpl);
  if (!containsTmpl){ return }

  // get create
  promises.push(deferred.promise);

  currentDir = path.basename(dirPath);

  if (currentDir === 'templates' || currentDir === 'template') {
    modulePath = path.normalize(dirPath + '/..'); // walk up one level
  }

  createTemplateModule(modulePath, walkPath, deferred);

}


function checkForTmpl (filePath) {
  if ( minimatch( path.basename(filePath), '*.tmpl.html') ) {
    return true;
  }
  return false;
}

function createTemplateModule (dirPath, walkPath, deferred) {
  var moduleString = getModuleString(dirPath, walkPath);

  // // debugging
  // console.log('moduleString: ', moduleString);
  // console.log('dirPath: ', dirPath);
  // console.log('----------------------', dirPath);

  gulp.src([
    dirPath + '/*.tmpl.html',
    dirPath + '/template/*.tmpl.html',
    dirPath + '/templates/*.tmpl.html',
  ])
    .pipe( templateCache({
      filename: moduleString + '.tmpl.js',
      module: moduleString
    }) )
    .pipe( gulp.dest( config.dest ) )
    .on('end', function () {
      deferred.resolve();
    });
}

function getModuleString (dirPath, walkPath) {
  var relativePath = path.relative(walkPath, dirPath);
  var dotRelativePath = relativePath.replace(/\//g, '.').replace(/_/g, '');
  return dotRelativePath;
}







