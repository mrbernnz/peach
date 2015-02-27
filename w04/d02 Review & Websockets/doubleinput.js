// function double
//
// takes one number as parameter
// returns the double of the result
// use this function to process standard input
//
// if the user enters 3, print 6. if they enter 8, print 16.
// Websocket version:
//
// write a websocket server that processes a client's input in the same way.
// when the client enters 3, we should send back to the client 6.

process.stdin.on("data",function(numb)
{
  //sets user input to a string, trim it and turn it into a interger
  var double = parseInt(numb.toString().trim());
  //print the double of what the user inputs
  console.log(double + double);
  //prints to user
  console.log("Enter a number.");

})
//print to user
console.log("Enter a number.");
