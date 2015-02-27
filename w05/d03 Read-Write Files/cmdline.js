// Exercise: Command Line Message
//
// Write a command line app that takes two arguments. The first argument is the name of a file and the second argument is the text to write into that file.

var filename = process.argv[2];
var text = process.argv[3];
var fs = require("fs");
fs.writeFile(filename,text,function(err)
{
  console.log("It worked!");
});

// fs.writeFile("someFile.txt",txt,function(err){})
// use this to not handle the error.
