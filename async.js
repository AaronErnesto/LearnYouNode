fs = require('fs')
var contador = 1
fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
//  if (data == "\n")
  var s = data.split('\n')
  console.log(s.length-1)
})


//console.log(contador)
