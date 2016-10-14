var fs = require('fs')
var path = require('path')
var folder =  process.argv[2]
var extension = '.' + process.argv[3]

fs.readdir(folder, function(err, lista){
  if(err) 
    console.log(err)
  else
  for(var i = 0; i<lista.length; i++)
    if(extension == path.extname(lista[i]))
      console.log(lista[i])
})
