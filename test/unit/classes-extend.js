
const chai = require('chai')
const expect = chai.expect

var VDom = function(cls) {
	var i = document.createElement('i')
	i.className = cls || ''
	return i
}

describe('class-extend hanlder', function() {

	it('addClass', function() {
		var vdom = VDom('xl')
		vdom.addClass('a', 'b', 'c d')
		expect(vdom.className).to.equal('xl a b c d')
	})

	it('NodeList addClass', function() {

		$('body').innerHTML = `
		<div id="x">jk</div>
		<ul>
			<li>l1</li>
			<li>l2</li>
			<li>l3</li>
			<li>l4</li>
		</ul>
		`
		var vdom = $('li')
		vdom.addClass('a', 'b', 'c d')
		expect(vdom[0].className).to.equal('a b c d')
		expect(vdom[1].className).to.equal('a b c d')
	})

	it('addClass:className=null', function() {
		var vdom = VDom(null)
		vdom.addClass('a', 'b', 'c d')
		expect(vdom.className).to.equal('a b c d')
	})

	it('removeClass', function() {
		var vdom = VDom('a b c d e')
		vdom.removeClass('a', 'b', 'd  e')
		expect(vdom.className).to.equal('c')
	})

	it('NodeList removeClass', function() {

		$('body').innerHTML = `
		<div id="x">jk</div>
		<ul>
			<li class="a b c d">l1</li>
			<li class="a b c">l2</li>
			<li class="a b c d">l3</li>
			<li class="a b c d">l4</li>
		</ul>
		`
		var vdom = $('li')
		vdom.removeClass('a', 'c d')
		expect(vdom[0].className).to.equal('b')
		expect(vdom[1].className).to.equal('b')
	})

	it('removeClass:no className', function() {
		var vdom = VDom(null)
		vdom.removeClass('a', 'b', 'd  e')
		expect(vdom.className).to.equal('')
	})

	it('removeClass:no className2', function() {
		var vdom = VDom('hgh sdf')
		vdom.removeClass('a', 'b', 'd  e')
		expect(vdom.className).to.equal('hgh sdf')
	})

	it('removeClass:patial match', function() {
		var vdom = VDom('hgh sdf')
		vdom.removeClass(vdom, 'a', 'b', 'd  e', 'hg')
		expect(vdom.className).to.equal('hgh sdf')
	})

	it('hasClass', function() {
		var vdom = VDom('hgh sdf fgh')	
		expect(vdom.hasClass('a')).to.equal(false)
		expect(vdom.hasClass('hg')).to.equal(false)
		expect(vdom.hasClass('sdf')).to.equal(true)
		expect(vdom.hasClass('fgh')).to.equal(true)
		expect(vdom.hasClass('hgh')).to.equal(true)
	})



})