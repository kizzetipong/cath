'use strict';
/* eslint-disable global-require */

module.exports = function (grunt) {
  var appData = grunt.file.readJSON(__dirname + '/app.json');
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    deploy: __dirname + '/dist/',
  };

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    yeoman: appConfig,

    env: {
      dev: {
        NODE_ENV: 'DEV',
        APP_NAME: appData.name,
        APP_VERSION: appData.version,
      },
      prod: {
        NODE_ENV: 'PROD',
      },
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep'],
      },
      preprocess: {
        files: ['<%= yeoman.app %>/*.tpl'],
        tasks: ['preprocess', 'wiredep'],
      },
      styles: {
        files: [
          '<%= yeoman.app %>/assets/less/**/*.less',
          '<%= yeoman.app %>/assets/less/*.less',
          '<%= yeoman.app %>/scripts/**/*.less',
        ],
        tasks: ['less:dev'],
      },
      gruntfile: {
        files: ['Gruntfile.js'],
      },
      server: {
        files: ['service.js', 'service/*.js', 'node/*.js'],
        tasks: ['express:dev'],
        options: {
          spawn: false,
        },
      },
      livereload: {
        options: {
          livereload: true,
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/assets/css/app.css',
          '<%= yeoman.app %>/scripts/**/*.js',
          '<%= yeoman.app %>/scripts/*.js',
        ],
      },
    },

    express: {
      options: {
        port: 9999,
      },
      dev: {
        options: {
          script: 'server.js',
          debug: true,
        },
      },
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    eslint: {
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/*.js',
          '<%= yeoman.app %>/scripts/**/*.js',
          'test/spec/**/*.js',
        ],
      },
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*',
          ],
        }],
      },
      server: '.tmp',
    },

    preprocess: {
      options: {
        context: {
          APP_NAME: appData.name,
          APP_VERSION: appData.version,
        },
      },
      dev: {
        files: {
          '<%= yeoman.app %>/index.html': '<%= yeoman.app %>/index.html.tpl',
        },
      },
    },

    less: {
      dev: {
        options: {
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'app.css.map',
          sourceMapFilename: '<%= yeoman.app %>/assets/css/app.css.map',
        },
        files: [{
          src: '<%= yeoman.app %>/assets/less/app.less',
          dest: '<%= yeoman.app %>/assets/css/app.css',
        }],
      },
      dist: {
        files: [{
          src: '<%= yeoman.app %>/assets/less/app.less',
          dest: '<%= yeoman.app %>/assets/css/app.css',
        }],
      },
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//,
        overrides: {

        },
      },
    },

    ngtemplates: {
      templateCache: {
        cwd: '<%= yeoman.app %>',
        src: [
          'scripts/**/*.html',
          'views/**/*.html',
        ],
        dest: '.tmp/templates.js',
      },
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin'],
            },
            post: {},
          },
        },
      },
    },

    // Performs rewrites based on the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/index.html'],
      css: ['<%= yeoman.dist %>/web/**/*.css'],
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/images',
          src: '**/*.{png,jpg,jpeg,gif,svg,ico}',
          dest: '<%= yeoman.dist %>/assets/images',
        }],
      },
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true,
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>',
        }],
      },
    },

    cssmin: {
      options: {
        rebase: false,
      },
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/web/scripts',
          src: ['*.js'],
          dest: '.tmp/concat/web/scripts',
        }],
      },
    },

    // Copies remaining files to places other tasks can use
    copy: {
      bootstrap: {
        files: [
          {
            expand: true,
            cwd: './bower_components/bootstrap/less',
            dest: '<%= yeoman.app %>/assets/less/bootstrap',
            src: [
              '**'
            ]
          },
          {
            expand: true,
            cwd: './bower_components/bootstrap/fonts',
            dest: '<%= yeoman.app %>/assets/fonts',
            src: [
              '**'
            ]
          }
        ]
      },
      styles: {
        files: [{
          expand: true,
          dot: false,
          cwd: '<%= yeoman.app %>/assets',
          dest: '.tmp/assets',
          src: [
            'css/*',
            'fonts/**',
            'images/**',
          ],
        }],
      },
      configfile: {
        expand: true,
        cwd: './',
        dest: '<%= yeoman.dist %>',
        src: ['bower.json', 'package.json', 'server_host.js', '.bowerrc'],
      },
      dist: {
        files: [{
          expand: true,
          cwd: '',
          dest: '<%= yeoman.dist %>',
          src: ['app.json', 'app_config.json', 'server/**', 'service/**', 'node/**', 'uploads/**'],
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: ['index.html', 'underconstruction.html'],
        }, {
          expand: true,
          cwd: '.tmp/assets',
          dest: '<%= yeoman.dist %>/web/assets',
          src: ['fonts/**', 'images/**'],
        }],
      },
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles',
      ],
      test: [
        'copy:styles',
      ],
      dist: [
        'copy:styles',
        'copy:configfile',
      ],
    },

    // Test settings
    karma: {
      test: {
        configFile: 'test/karma.conf.js',
        singleRun: true,
      },
      watch: {
        configFile: 'test/karma.conf.js',
        singleRun: false,
      },
    },
  });

  grunt.registerTask('prepare', [
    'copy:bootstrap',
  ]);

  grunt.registerTask('serve', 'Compile then start a connect web server', [
    'clean:server',
    'env:dev',
    'preprocess',
    'wiredep',
    'concurrent:server',
    'less:dev',
    'express:dev',
    'watch',
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'karma:test',
  ]);

  grunt.registerTask('wtest', [
    'clean:server',
    'concurrent:test',
    'karma:watch',
  ]);

  grunt.registerTask('validate', [
    'eslint:all',
    'karma:test',
  ]);

  grunt.registerTask('build', [
    // 'validate',
    'clean:dist',
    'env:prod',
    'preprocess',
    'wiredep',
    'less:dist',
    'ngtemplates',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'imagemin',
    'usemin',
    'htmlmin',
  ]);

  grunt.registerTask('deploy', [
    'build',
  ]);
};
