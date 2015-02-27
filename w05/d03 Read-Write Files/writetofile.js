// Exercise: Command Line Message
//
// Write a command line app that takes two arguments. The first argument is the name of a file and the second argument is the text to write into that file.


var fs = require("fs");
var txt = "hello beautiful";
fs.writeFile("someFile.txt",txt,function(err)
{
  console.log("It worked!");
});

// fs.writeFile("someFile.txt",txt,function(err){})
// use this to not handle the error.
