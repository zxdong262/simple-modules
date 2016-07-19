
'use strict'

let
ugly = require('gulp-uglify')
,gulp = require('gulp')
,watch = require('gulp-watch')
,plumber = require('gulp-plumber')
,newer = require('gulp-newer')
,concat = require('gulp-concat-util')
,rename = require('gulp-rename')
,gutil = require('gulp-util')
,runSequence = require('run-sequence')
,_ = require('lodash')
,path = require('path')
,fs = require('fs')
,exec = require('child_process').exec
,mocha = require('gulp-mocha')
,batch = require('gulp-batch')
,src = 'test/*.js'
,uglify = require('gulp-uglify')
,Server = require('karma').Server
,umd = require('gulp-umd')

var umdOption = {
  dependencies: function(file) {
    return [];
  },
  exports: function(file) {
    return '$';
  },
  namespace: function(file) {
    return '$'
  }
}

var src0 = {
	cwd: 'src'
	,dist: 'dist'
}


function banner() {
	var pkg = JSON.parse(fs.readFileSync('package.json').toString())
	return gutil.template('/**\n' +
	' * <%= pkg.name %>\n' +
	' * @version v<%= pkg.version %> - <%= today %>\n' +
	' * @link <%= pkg.homepage %>\n' +
	' * @author <%= pkg.author.name %> (<%= pkg.author.email %>)\n' +
	' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
	' */\n\n', { file: '', pkg: pkg, today: new Date().toISOString().substr(0, 10) })

}

gulp.task('dist', function() {

	// Build package
	gulp.src(['./src/$.js'])
		.pipe(umd(umdOption))
		.pipe( concat('$.js') )
		.pipe(concat.header(banner()))
		.pipe(gulp.dest(src0.dist))
		.pipe(rename(function(path) { path.extname = '.min.js'; }))
		.pipe(plumber())
		.pipe(uglify())

		.pipe(concat.header(banner()))
		.pipe(gulp.dest(src0.dist))

})

//watch
gulp.task('watch',  function () {

	watch([src0.cwd + '/$.js', __dirname + '/package.json'], function() {
		runSequence('dist')
	})

})

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/test/karma.conf.js'
  }, done).start()
})

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/test/karma.conf.js'
    ,singleRun: true
  }, done).start()
})


gulp.task('default', ['tdd', 'watch'])

