var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var sqlite3 = require('sqlite3');
// 
var db = new sqlite3::Database('petulance');
var app = express();
// 
app.use(cors());
app.use(bodyParser.json({extended: false}));
// 
app.get('/',function(req,res) {
  
});

