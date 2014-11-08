var dest = './bin';
var src  = './src';

module.exports = {
  dest: dest,
  src: src,

  browserSync: {
    server: {
      // serve src folder for sourcemap linking
      baseDir: [dest, src],
    }
  },

  app: {
    src: ['./src/**/*.mod.js', './src/**/*.js', '!./src/**/*.test.js', '!./src/**/*.e2e.js'],
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
    ],
  },

};