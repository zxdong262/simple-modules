
exports.default = {

	addClass (...classes) {
		var cls = this.className || ''
		this.className = cls + (cls?' ':'') + classes.join(' ')
	}

	,hasClass (clst) {
		var cls = this.className
		if(!cls) return false
		cls = ' ' + cls.split(/\s+/).join(' ') + ' '
		var reg = new RegExp(' ' + clst + ' ')
		return reg.test(cls)
	}

	,removeClass (...classes) {
		var cls = this.className
		if(!cls) return
		cls = '  ' + cls.split(/\s+/).join('  ') + '  '
		var clst = classes.join(' ').split(/\s+/)
		var reg = new RegExp(' ' + clst.join(' | ') + ' ', 'g')
		cls = cls.replace(reg, '')
						 .replace(/^\s+|\s+$/g, '')
						 .replace(/ {2,}/g, ' ')
						 
		this.className = cls
	}

}



