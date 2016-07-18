/*!
 * TEST SERVER
**/


var
koa = require('koa')
,oneYear = 1000 * 60 * 60 * 24 * 365
,config = require('./config')
,port = config.port
,app = koa()
,Router = require('koa-router')
,route = new Router()
,bodyParser = require('koa-bodyparser')

route.post('/ajax/post', function *(next) {
	console.log('this.request.body')
	console.log(this.request.body)
	this.body = { ok: 'post ok', data: this.request.body }
})

route.get('/ajax/get', function *(next) {
	console.log('this.query')
	console.log(this.query)
	this.body = { ok: 'get ok', data: this.query }
})

app.use(bodyParser())
app.use(route.routes())
app.use(route.allowedMethods())

//start
app.listen(port, function() {
	console.log('test server runs on port ' + port)
})

