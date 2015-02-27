// Exercise: Count the number of lines
//
// Count the number of lines in a file. Open up your own code file as a sample file (as in fs.readFile("index.js, ...)
//
// Bonus
//
// Print out the contents of the file with lines in reverse order.

// var fs = require("fs");
// fs.readFile("index.js",function(err,data)
// {
//   var text = data.toString().split("\n");
//   console.log(text.length);
// });


var fs = require("fs");
fs.readFile("index.js",function(err,data)
{
  var text = data.toString().split("\n").reverse();
  //for loop is used to get out of the array and make it look like a file.
  text.forEach(function(rev)
  {
    console.log(rev);
  })
});
