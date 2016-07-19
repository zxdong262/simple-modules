/**
 * simple-modules
 * @version v0.1.0 - 2016-07-19
 * @link https://github.com/zxdong262/simple-modules
 * @author ZHAO Xudong (zxdong@gmail.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.$ = factory();
  }
}(this, function() {


var $ = function(sel) {
  var res = document.querySelectorAll(sel)
  return res.length === 1?res[0]:res
}

$.ajax = function(_opts) {

  var opts = Object.assign({
    type: 'POST'
    ,data: null
    ,dataType: 'json'
  }, _opts)

  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open(opts.type, opts.url)
    var data = JSON.stringify(opts.data)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.onload = function () {
      return resolve(xhr)
    }
    xhr.onerror = function () {
      reject(xhr)
    }
    xhr.send(data)
  })

}

$.get = function (url) {
  return $.ajax({
    url: url
    ,type: 'GET'
    ,data: null
  })
}

$.post = function (url, data) {
  return $.ajax({
    url: url
    ,type: 'POST'
    ,data: data
  })
}

var slice = Array.prototype.slice


NodeList.prototype.forEach = Array.prototype.forEach

//class handling for Node
NodeList.prototype.addClass = Node.prototype.addClass = function() {
  var classes = slice.call(arguments)
  var arr = this.length?this:[this]
  arr.forEach(function(item) {
    var cls = item.className || ''
    item.className = cls + (cls?' ':'') + classes.join(' ')
  })
}

NodeList.prototype.hasClass = Node.prototype.hasClass = function(clst) {
  var th = this.length?this[0]:this
  var cls = th.className
  if (!cls) return false
  cls = ' ' + cls.split(/\s+/).join(' ') + ' '
  var reg = new RegExp(' ' + clst + ' ')
  return reg.test(cls)
}

NodeList.prototype.removeClass = Node.prototype.removeClass = function() {
  var classes = slice.call(arguments)
  var arr = this.length?this:[this]
  arr.forEach(function(item) {
    var cls = item.className
    if(!cls) return
    cls = '  ' + cls.split(/\s+/).join('  ') + '  '
    var clst = classes.join(' ').split(/\s+/)
    var reg = new RegExp(' ' + clst.join(' | ') + ' ', 'g')
    cls = cls.replace(reg, '')
             .replace(/^\s+|\s+$/g, '')
             .replace(/ {2,}/g, ' ')
             
    item.className = cls
  })
}

//on off
Node.prototype.on = Node.prototype.addEventListener

//other sugars
Node.prototype.html = Node.prototype.innerHTML
Node.prototype.text = Node.prototype.textContent
return $;
}));
