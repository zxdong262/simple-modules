
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
,Server = require('karma').Server

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/test/karma.conf.js'
  }, done).start()
})

gulp.task('default', ['tdd'])

