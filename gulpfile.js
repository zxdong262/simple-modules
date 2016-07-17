
'use strict'

let
ugly = require('gulp-uglify')
,gulp = require('gulp')
,watch = require('gulp-watch')
,plumber = require('gulp-plumber')
,newer = require('gulp-newer')
,concat = require('gulp-concat')
,rename = require('gulp-rename')
,runSequence = require('run-sequence')
,_ = require('lodash')
,path = require('path')
,fs = require('fs')
,exec = require('child_process').exec
,mocha = require('gulp-mocha')
,batch = require('gulp-batch')
,src = 'test/*.js'

//build
gulp.task('test', function () {
	return gulp.src(src)
		.pipe(plumber())
		.pipe(mocha())
		
		.once('error', function (e) {
				console.error(e.stack || e)
		})
		.once('end', function () {
			//process.exit()
		})
})

gulp.task('watch',  function () {

	return watch(['test/*.js', 'src/*.js'], batch(function (events, done) {
		gulp.start('test', done)
	}))

})

gulp.task('default', ['watch'])

