
const chai = require('chai')
const expect = chai.expect
const ch = require('../src/classes')

describe('class hanlder', function() {

	it('addClass', function() {
		var vdom = {
			className: 'xl'
		}
		ch.addClass(vdom, 'a', 'b', 'c d')
		expect(vdom.className).to.equal('xl a b c d')
	})

	it('addClass:className=null', function() {
		var vdom = {
			className: null
		}
		ch.addClass(vdom, 'a', 'b', 'c d')
		expect(vdom.className).to.equal('a b c d')
	})

	it('removeClass', function() {
		var vdom = {
			className: 'a b c d e'
		}
		ch.removeClass(vdom, 'a', 'b', 'd  e')
		expect(vdom.className).to.equal('c')
	})

	it('removeClass:no className', function() {
		var vdom = {
			className: null
		}
		ch.removeClass(vdom, 'a', 'b', 'd  e')
		expect(vdom.className).to.equal(null)
	})

	it('removeClass:no className2', function() {
		var vdom = {
			className: 'hgh sdf'
		}
		ch.removeClass(vdom, 'a', 'b', 'd  e')
		expect(vdom.className).to.equal('hgh sdf')
	})

	it('removeClass:patial match', function() {
		var vdom = {
			className: 'hgh sdf'
		}
		ch.removeClass(vdom, 'a', 'b', 'd  e', 'hg')
		expect(vdom.className).to.equal('hgh sdf')
	})

	it('hasClass', function() {
		var vdom = {
			className: 'hgh sdf fgh'
		}
		
		expect(ch.hasClass(vdom, 'a')).to.equal(false)
		expect(ch.hasClass(vdom, 'hg')).to.equal(false)
		expect(ch.hasClass(vdom, 'sdf')).to.equal(true)
		expect(ch.hasClass(vdom, 'fgh')).to.equal(true)
		expect(ch.hasClass(vdom, 'hgh')).to.equal(true)
	})

})