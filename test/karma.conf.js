module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/lodash/lodash.js',
      'app/scripts/appModule.js',
      'app/scripts/controllers/mainController.js',
      'test/spec/**/*.js',
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS',
    ],

    // Which plugins to enable
    plugins: [
      'karma-coverage',
      'karma-htmlfile-reporter',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher',
    ],

    preprocessors: {
      'app/scripts/**/*.js': ['coverage'],
      'app/scripts/components/**/*.html': ['ng-html2js'],
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'templateCache',
    },

    reporters: ['progress', 'html', 'coverage'],

    htmlReporter: {
      outputFile: 'test/reports/unit-tests.html',
    },

    coverageReporter: {
      reporters: [
        {
          type: 'html',
          dir: 'test/reports/coverage',
        }, {
          type: 'text-summary',
          dir: 'test/reports/coverage',
        },
      ],
    },

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    proxies: {
      '/views/': '/app/views/',
      '/web/': '/app/',
      '/Apps/': 'http://localhost:9000/Apps/',
    },
  });
};
