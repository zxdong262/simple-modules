
var obj = {}

obj.ajax = function(_opts) {

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

obj.get = function (url) {
  return obj.ajax({
    url: url
    ,type: 'GET'
    ,data: null
  })
}

obj.post = function (url, data) {
  return obj.ajax({
    url: url
    ,type: 'POST'
    ,data: data
  })
}


exports.default = obj