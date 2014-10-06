'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({

    jscs: {
      src: [
        '*.js',
        'bin/findPythagoreanTriples',
        'lib/*.js',
        'tests/*.js'
      ],
      options: {
        config: '.jscsrc',
      }
    },

    jshint: {
      all: [
        '*.js',
        'bin/findPythagoreanTriples',
        'lib/*.js',
        'tests/*.js'
      ],
      options: {
        jshintrc: true
      }
    },

    watch: {
      all: {
        files: [
          '*.js',
          'bin/findPythagoreanTriples',
          'lib/*.js',
          'tests/*.js'
        ],
        tasks: [
          'jscs',
          'jshint'
        ]
      }
    }

  });

  grunt.registerTask('default', [
    'jscs',
    'jshint',
    'watch'
  ]);

};