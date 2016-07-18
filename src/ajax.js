

exports.default = {

  ajax (_opts) {

    var opts = Object.assign({
      type: 'POST'
      ,data: {}
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

  ,get (url, data) {
    return exports.ajax({
      url: url
      ,type: 'GET'
      ,data: data
    })
  }

  ,post (url, data) {
    return exports.ajax({
      url: url
      ,type: 'POST'
      ,data: data
    })
  }
}