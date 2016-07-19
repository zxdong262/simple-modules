
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



describe('event on/off', function() {

	beforeEach(function() {
		$('body').innerHTML = `
		<div id="x">jk</div>
		<ul>
			<li>l1</li>
			<li>l2</li>
			<li>l3</li>
			<li>l4</li>
		</ul>
		`
	})

	it('on one', function(done) {
		var x = $('#x')
		x.on('click', function() {
			$('li')[0].textContent = 'xx'
			expect($('li')[0].textContent).to.equal('xx')
			done()
		})
		var event = new MouseEvent('click', {
	    'view': window,
	    'bubbles': true,
	    'cancelable': true
	  });
		x.dispatchEvent(event)
	})


})