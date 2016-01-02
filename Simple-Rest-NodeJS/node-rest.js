var http = require('http');
var qs = require('querystring');
var url = require('url') ;

function results(req, res){

  /* get body request */
  var body = '';
   
  /* Get data from body request */
  req.on('data',function(data){
  	body += data.toString();
  });  

  /* serilize and view the objects */
  req.on('end',function(){
		
	var result = {};

	res.writeHead(200, "OK", {'Content-Type': 'application/json'});
	 if(req.method == "GET"){
		/* Get query the object 'name' */
		var queryObject = url.parse(req.url,true).query;
		 
		/* View the object 'name' */
		result = JSON.stringify({hello: queryObject.name});

		/* View the result */
  		res.write(result);
	}else{
		/* Check Headers contains application/x-www-form-urlencoded */
		if(req.headers['content-type'] == "application/x-www-form-urlencoded"){
			
			/* Get the object 'name' as JSON. The request is name=name_value */
                        result = JSON.stringify({hello : qs.parse(body).name});
			
			/* View the result */
                        res.write(result);
		
		/* Check Headers contains application/json. The request is { name : name_value } */
                }else if(req.headers['content-type'] == "application/json"){
	
			/* Get the object 'name' as JSON */
                        result = JSON.stringify({hello : JSON.parse(body).name});
				
			/* View the result */
                        res.write(result);
                }
	}
	
	/* Print detail headers in console */
	console.log("Headers : ",req.headers);

        res.end();
  });
	
}

http.createServer(results).listen(8080);
