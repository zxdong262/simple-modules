// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

'use strict';

var port = require('./config').port
var karmaPort = require('./config').karmaPort

module.exports = function(config) {

	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: './..',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['mocha', 'chai', 'chai-as-promised', 'browserify'],

		// list of files / patterns to load in the browser
		files: [
			'dist/$.js',
			'test/unit/*.js'
		],

		// list of files / patterns to exclude
		exclude: [],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress'],

		// web server port
		port: karmaPort,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		browsers: ['Chrome'],

		// Timeouts for SauceLabs
		browserDisconnectTimeout: 10000, // default 2000
		browserDisconnectTolerance: 2, // default 0
		browserNoActivityTimeout: 30 * 1000, //default 10000

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		//singleRun: true,

		preprocessors: {
			'test/**/*.js': [ 'browserify' ]
			,'src/*.js': [ 'browserify' ]
		},
	    browserify: {
	      debug: true
	    },
		plugins: [
			'karma-mocha',
			'karma-chai-plugins',
			'karma-chrome-launcher',
			'karma-browserify'
		],

		proxies: {
		  '/ajax/get': `http://localhost:${port}/ajax/get`,
		  '/ajax/post': `http://localhost:${port}/ajax/post`
		},

	})

}