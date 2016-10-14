var modulo = require('./modulo.js')

modulo(process.argv[2], process.argv[3], function(err, lista){
  if(err)
    console.log(err)
  else
    for(var i = 0; i<lista.length; i++)
      console.log(lista[i])
}
)
