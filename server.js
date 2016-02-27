var express = require('express')

var app = express ()

app.set('port',(process.env.PORT || 3300))

app.get('/', function(req,res){
	res.end('hello world')
}).listen(app.get('port'),
function() {
	console.log("server is listening on port" + ' ' + app.get('port').toString())
})



app.set('views',__dirname+'/views');

//app = config(app);

