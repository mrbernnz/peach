var hints = {
  results: {
    profession: 'actor',
    known_for: ['Fury', 'Inglourious Basterds', 'Troy'],
    gender: 'male',
    first_letter_of_first_name: 'B',
    extra_hint: "You probably heard we ain't in the prisoner-takin' business; we in the killin Nazi business. And cousin, business is a-boomin"
  }
};
var cor = {
  correct: 'Great guess!'
};
var incor = {
  incorrect: 'Really?'
};
var wrong = {
  wrong: 'You need help, :-('
}
var CELEBNAME = 'Brad_Pitt';
var express = require('express');
var request = require('request');
var app = express();
app.get('/', function(req, res) {
  console.log('Player connected');
  res.json(hints);
});
app.get('/:CELEBNAME', function(req, res) {
  var address = req.params.CELEBNAME;
  if (CELEBNAME !== req.params.CELEBNAME) {
    i = parseInt(req.params.CELEBNAME);
    j = 0
    while (j < 4) {
      res.json(incor['incorrect']);
      j++
    };
    res.json(wrong['wrong'])
  }
  if (CELEBNAME === req.params.CELEBNAME) {
    res.json(cor['correct']);
  };
});
var server = app.listen(3000, function() {
  console.log('listening on port 3000')
});
