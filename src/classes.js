
exports.default = {

	addClass (dom, ...classes) {
		var cls = dom.className || ''
		dom.className = cls + (cls?' ':'') + classes.join(' ')
	}

	,hasClass (dom, clst)  {
		var cls = dom.className
		if(!cls) return false
		cls = ' ' + cls.split(/\s+/).join(' ') + ' '
		var reg = new RegExp(' ' + clst + ' ')
		return reg.test(cls)
	}

	,removeClass (dom, ...classes) {
		var cls = dom.className
		if(!cls) return
		cls = '  ' + cls.split(/\s+/).join('  ') + '  '
		var clst = classes.join(' ').split(/\s+/)
		var reg = new RegExp(' ' + clst.join(' | ') + ' ', 'g')
		cls = cls.replace(reg, '')
						 .replace(/^\s+|\s+$/g, '')
						 .replace(/ {2,}/g, ' ')
						 
		dom.className = cls
	}

}