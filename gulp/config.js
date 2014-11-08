var dest = './bin';
var src  = './src';

module.exports = {
  dest: dest,
  src: src,
  outputVendorJsFile: 'vendor.js',

  browserSync: {
    server: {
      // serve src folder for sourcemap linking
      baseDir: [dest, src],
    },
  },

  app: {
    src: ['./src/**/*.mod.js', './src/**/*.js', '!./src/**/*.test.js'],
    output: 'app.js',
    dest: dest,
  },

  lint: {
    src: './src/**/*.js',
  },

  vendor: {
    src: [
      require.resolve('angular'),
    ],
    output: 'vendor.js',
    dest: dest,
  },

  copy: {
    src: [
      src + '/index.html',
    ],
  },

  clean: {
    src: [
      dest,
    ],
  },

};