// Further Exercise: Read then Write
//
// Write a command line app that takes two arguments. The first is an existing filename, and the second is a new filename. Read the contents of the first file and write them to the second file.

var filename = process.argv[2];
var newfilename = process.argv[3];
var fs = require("fs");
fs.readFile(filename,function(err,data)
{
  fs.writeFile(newfilename,data,function(err)
  {
    console.log("It worked!");
  });
});

// fs.writeFile("someFile.txt",txt,function(err){})
// use this to not handle the error.
