var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer(function(request, response){
	// A constante __dirname retorna o diretório raiz da aplicação.
	fs.readFile(__dirname + '/html/index.html', function(err, html){
	response.writeHeader(200, {'Content-Type': 'text/html'});
	response.write(html);
	
	var result = url.parse(request.url, true);	
	for(var key in result.query){
		response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	}
	
	response.end();
	});
});
console.log(__dirname);
server.listen(3000, function(){
console.log('Executando Site Pessoal');
});