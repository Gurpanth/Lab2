var http = require('http');

var url = require('url');

http.createServer(function(req, res){
	//create the server to run the page.
	var qs = url.parse(req.url,true).query;
	var calculation = qs.calculation;
	var x = parseFloat(qs.x);
	var y = parseFloat(qs.y);
	
	//Check and calculate the values
	if(method == 'add')
		res.write( x + '+' + y + '=' + (x+y));
	else if(calculation == 'substract')
		res.write( x + '-' + y + '=' + (x-y));
	else if(calculation == 'multiply')
		res.write( x + '*' + y + '=' + (x*y));
	else if(calculation == 'divide')
		res.write( x + '/' + y + '=' + (x/y));
	else
		res.write('Invalid Attribute');
	
res.end();
	
}).listen(3000);

