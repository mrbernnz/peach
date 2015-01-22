var data = {results: [{team:'ARSENAL',manager:'ARSENE WENGER',captain:'MIKEL ARTETA'},{team:'aston villa',manager:'paul lambert',captain:'ron vlaar'},{team:'burnley',manager:'sean dyche',captain:'jason shackell'},{team:'chelsea',manager:'jose mourinho',captain:'john terry'},{team:'crystal palace',manager:'alan pardew',captain:'mile jedinak'}]}

var express = require('express');
var request = require('request');
var app = express();
app.use(express.static('public'));
app.get('/',function(req,res){
  var url = ''
});

