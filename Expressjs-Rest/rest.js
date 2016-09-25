var express = require('express')
var router = express.Router()
var qs = require('querystring')


/* GET with and without parameter name */
router.get('/', function(req, res) {
	
	var text = "get without parameter";
	var name = req.query.name
	
	if(name != null){
		text = "your name is "+name
	}

	res.send(text)
})


/* GET with suffix */
router.get('/:name', function(req, res) {
	
	var name = req.params.name
	
	res.send("Haii "+name)
})


/* POST with parameter name */
router.post('/', function(req, res) {
	res.send("send POST "+req.body.name)
})



/* PUT with parameter name */
router.put('/', function(req, res) {
	res.send("send PUT "+req.body.name)
})


/* DELETE Response */
router.delete('/', function(req, res) {
	res.send("send DELETE "+req.body.name)
})



/* All HTTP Method (GET, POST, PUT, DELETE, HEAD, etc) */
router.all('/', function(req, res) {
	res.send("Your method is "+req.method)
})



module.exports = router 
