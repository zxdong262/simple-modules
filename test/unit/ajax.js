
const chai = require('chai')
const expect = chai.expect

const { ajax, get, post } = $
const karmaPort = require('../config').karmaPort

//console.log(ajax)
describe('ajax', function() {

	it('ajax', function(done) {
		ajax({
			url: `http://localhost:${karmaPort}/ajax/post`
			,data: {
				x: 'gfhg'
			}
		})
		.then(function(xhr) {
			var body = JSON.parse(xhr.response)
			expect(body.ok).to.equal('post ok')
			expect(body.data.x).to.equal('gfhg')
			done()
		})
	})

	it('post', function(done) {
		post(`http://localhost:${karmaPort}/ajax/post`, {
			g: 'xx'
		})
		.then(function(xhr) {
			var body = JSON.parse(xhr.response)
			expect(body.ok).to.equal('post ok')
			expect(body.data.g).to.equal('xx')
			done()
		})
	})

	it('get', function(done) {
		get(`http://localhost:${karmaPort}/ajax/get?x=1`)
		.then(function(xhr) {
			var body = JSON.parse(xhr.response)
			expect(body.ok).to.equal('get ok')
			expect(body.data.x).to.equal('1')
			done()
		})
	})

})