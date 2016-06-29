///////////////////////////Setup

var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express')
var exphbs  = require('express-handlebars');
var pry = require('pryjs')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/results', express.static('public'));

app.use(bodyParser.text());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var port = process.env.PORT || 8000
var server = app.listen(port);
console.log('Listening on port ' + port);


//////////////////////Server

app.get('/', function(req,res){
  res.render('index')
})
