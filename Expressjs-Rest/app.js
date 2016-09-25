var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var rest = require('./rest')

app.use(bodyParser.urlencoded({extended : false}))

app.use('/', rest)

app.listen(8080)

