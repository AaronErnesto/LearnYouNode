var fs = require('fs')
var path = require('path')

module.exports = function(direccion, extension, callback){
 var fs = require('fs')
  var regex = new RegExp('\\.' + extension + '$')

  fs.readdir(direccion, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return regex.test(file)
    })

    callback(null, list)
  

})
}
