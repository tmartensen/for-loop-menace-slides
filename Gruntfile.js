var grunt = require('grunt');

grunt.initConfig({
  swapi2json: {
    all: {
      dir: './assets/swapi'
    },
  },
});

grunt.loadNpmTasks('grunt-swapi2json');