var express = require('express');
var cors = require('cors'); /*a fix for...*/
var bodyParser = require('body-parser');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('petulance.db');
app.use(cors());
app.use(bodyParser.json({
  extended: false
}));
// 
app.get('/pets', function(req, res) {
  // 
  db.all('SELECT * FROM pets', function (err,rows) {
    if (err) {throw err;};
    res.json(rows);
    
  })
});
// 
app.post('/pet', function(req, res) {
  var name = req.body.name;
  var type = req.body.type;
  // 
  db.run('INSERT INTO pets (name,type) VALUES (?,?)',name,type, function (err) {
    if (err) {throw err;};
    var id = this.lastID; /*weird way of getting id of what you just inserted*/
    db.get('SELECT * FROM pets WHERE id=?',id,function (err,row) {
      if (err) {throw err};
      res.json(row);
    });
  });
});
// 
app.put('/pet/:id', function(req, res) {
  var id = req.params.id;
  var name = req.body.name;
  var type = req.body.type;
  // 
  db.run('UPDATE pets SET name = ?, type = ? WHERE id = ?',name,type,id,function (err) {
    if (err) {throw err;};
    // 
    db.get('SELECT * FROM pets WHERE id = ?',id,function (err,row) {
      if (err) {throw err};
      res.json(row);
    });
  });
});
// 
app.delete('/pet/:id', function(req, res) {
  var id = req.params.id;
  //
  db.run('DELETE FROM pets WHERE id = ?',id,function (err) {
    if (err) {throw err};
    res.json({deleted: true});
  });
});
// 
app.listen(3000, function() {
  console.log("listening on port 3000")
});
