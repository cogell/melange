var dest = './bin';
var src  = './src';
var tmp  = './.tmp';
var manifestPath = 'manifest.json';

module.exports = {
  dest: dest,
  src: src,

  'browser-sync': {
    server: {
      // serve src folder for sourcemap linking
      baseDir: [dest, src],
    }
  },

  templates: {
    src: './src/apps',
    dest: tmp
  },

  app: {
    // make sure to concat all the module definition files before anything else
    src: [
      './src/**/*.mod.js',
      './.tmp/*.tmpl.js',
      './src/**/*.js',
      '!./src/**/*.test.js',
      '!./src/**/*.e2e.js'
    ],
    output: 'app.js',
    dest: dest,
    wrap: './gulp/wrap.js'
  },

  lint: {
    src: './src/**/*.js',
  },

  rev: {
    src: [ dest + '/*.js', dest + '*.css'],
    dest: dest,
    manifestPath: manifestPath
  },

  'rev-replace': {
    src: [ dest + '/index.html' ],
    dest: dest,
    manifestPath: manifestPath
  },

  "clean-build": {
    src: [
      dest + '/' + manifestPath,
      dest + '/' + 'app.js',
      dest + '/' + 'vendor.js',
      dest + '/' + 'style.css'
    ]
  },

  e2e: {
    src: './src/**/*.e2e.js',
    watch: dest + '/**/*.js'
  },

  vendor: {
    src: [
      require.resolve('angular'),
      require.resolve('angular-route'),
    ],
    output: 'vendor.js',
    dest: dest,
  },

  copy: {
    src: [
      src + '/index.html',
    ],
    dest: dest
  },

  clean: {
    src: [
      dest,
      tmp
    ],
  },

};