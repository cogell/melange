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

var templateCache = require('gulp-angular-templatecache');

gulp.task( taskname, function (done) {
  templateWalk( config.src, done );
});


function templateWalk ( walkPath, done ) {
  file.walkSync( walkPath, function(dirPath, dirs, files){
    walkCallback(dirPath, dirs, files, walkPath);
  });

  done();
}

function walkCallback (dirPath, dirs, files, walkPath) {
  var currentDir;
  var containsTmpl = false;

  currentDir = path.basename(dirPath);
  containsTmpl = _.some(files, checkForTmpl);

  if (!containsTmpl){ return }

  if (currentDir === 'templates' || currentDir === 'template') {
    // walk up one level and then fire createTemplateModule
    createTemplateModule( path.normalize(dirPath + '/..'), walkPath);
  } else {
    createTemplateModule(dirPath, walkPath);
  }

}

function checkForTmpl (filePath) {
  if ( minimatch( path.basename(filePath), '*.tmpl.html') ) {
    return true;
  }
  return false;
}

function createTemplateModule (dirPath, walkPath) {
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
    .pipe( gulp.dest( config.dest ) );
}

function getModuleString (dirPath, walkPath) {
  var relativePath = path.relative(walkPath, dirPath);
  var dotRelativePath = relativePath.replace(/\//g, '.').replace(/_/g, '');
  return dotRelativePath;
}




