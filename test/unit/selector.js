
const chai = require('chai')
const expect = chai.expect


$('body').innerHTML = `
<div id="x">jk</div>
<ul>
	<li>l1</li>
	<li>l2</li>
	<li>l3</li>
	<li>l4</li>
</ul>
`

describe('selector', function() {

	it('#id', function() {
		var x = $('#x')
		expect(x instanceof Node).to.equal(true)
	})

	it('tagName', function() {
		var x = $('li')
		expect(x instanceof NodeList).to.equal(true)
		expect(x.length).to.equal(4)
	})

})