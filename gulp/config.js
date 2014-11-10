var dest = './bin';
var src  = './src';
var tmp  = './.tmp';

module.exports = {
  dest: dest,
  src: src,

  browserSync: {
    server: {
      // serve src folder for sourcemap linking
      baseDir: [dest, src],
    }
  },

  templates: {
    // needs to start at the template's modules' root
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
  },

  lint: {
    src: './src/**/*.js',
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