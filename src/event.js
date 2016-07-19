
EventTarget.prototype.on = 
NodeList.prototype.on = function(type, callback) {
	var arr = this
	if(!this.length) arr = [this]
	for(var i = 0, len = arr.length;i < len;i ++) {
		arr[i].addEventListener(type, callback, false)
	}
}