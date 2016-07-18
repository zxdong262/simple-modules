
const chai = require('chai')
const expect = chai.expect
const ch = require('../../src/classes-extend').default

var VDom = class {
	constructor(cls) {
		this.className = cls
	}
}

Object.assign(VDom.prototype, ch)


describe('class-extend hanlder', function() {

	it('addClass', function() {
		var vdom = new VDom('xl')
		vdom.addClass('a', 'b', 'c d')
		expect(vdom.className).to.equal('xl a b c d')
	})

	it('addClass:className=null', function() {
		var vdom = new VDom(null)
		vdom.addClass('a', 'b', 'c d')
		expect(vdom.className).to.equal('a b c d')
	})

	it('removeClass', function() {
		var vdom = new VDom('a b c d e')
		vdom.removeClass('a', 'b', 'd  e')
		expect(vdom.className).to.equal('c')
	})

	it('removeClass:no className', function() {
		var vdom = new VDom(null)
		vdom.removeClass('a', 'b', 'd  e')
		expect(vdom.className).to.equal(null)
	})

	it('removeClass:no className2', function() {
		var vdom = new VDom('hgh sdf')
		vdom.removeClass('a', 'b', 'd  e')
		expect(vdom.className).to.equal('hgh sdf')
	})

	it('removeClass:patial match', function() {
		var vdom = new VDom('hgh sdf')
		vdom.removeClass(vdom, 'a', 'b', 'd  e', 'hg')
		expect(vdom.className).to.equal('hgh sdf')
	})

	it('hasClass', function() {
		var vdom = new VDom('hgh sdf fgh')	
		expect(vdom.hasClass('a')).to.equal(false)
		expect(vdom.hasClass('hg')).to.equal(false)
		expect(vdom.hasClass('sdf')).to.equal(true)
		expect(vdom.hasClass('fgh')).to.equal(true)
		expect(vdom.hasClass('hgh')).to.equal(true)
	})

})