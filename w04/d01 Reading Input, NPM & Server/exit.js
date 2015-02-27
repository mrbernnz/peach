// Reference
//
// To exit your program:
// process.exit()
// Write a command line app
//
// That prints out Press Enter to continue
// If they type in exit (and then press Enter) then exit your application
// Otherwise print out the message again.

process.stdin.on("data",function(inpt)
{
  var prcssinpt = inpt.toString().trim();
  if (prcssinpt==="exit") {
    process.exit();
  }
  else {
    console.log("Press Enter");
  }
})
console.log("Press Enter");

// Write a command line app
//
// That prints out a random joke (chosen from 3 or more jokes)
// Prompts the user Would you like to hear another one?
// Repeats a joke on input y and exits on input n
