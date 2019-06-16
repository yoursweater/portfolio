///////////////////////////Setup

var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/results', express.static('public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(bodyParser.text());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var port = process.env.PORT || 8000
app.listen(port);
console.log('Listening on port ' + port);


//////////////////////Server

app.get('/', function(req,res){
  res.render('index')
})

app.get('/traveling-dwarf', function(req,res){
  res.render('dwarf', { title: 'Traveling Dwarf', layout: 'emptydwarf'})
})
