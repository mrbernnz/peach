// Exercise: Adding special commands
//
// function sub
//
// takes two numbers as parameters
// returns the first minus the second
// use this function and the add function to process standard input
//
// if the user enters in sub 10 2 then print back 10 minus 2 which is 8
// if the user enters in add 4 8 then print back 4 plus 8 which is 12
// create a websocket version as well
//
// Bonus: Add and Subtract all the numbers
//
// complete the same exercise as before ("Adding special commands") but support any number of arguments to the add and sub` commands
// sub 20 5 4 2 1 would be 20 - 5 - 4 - 2 - 1 = 8
// add 5 2 9 11 13 would be 5 + 2 + 9 + 11 + 13 = 40

var sub = function(numb)
{
  //turn numb into a string and add a space between the inputs in a array
  var arr = numb.toString().split(" ");
  //add the numbers in the array
  var subin = parseInt(arr[0]) - parseInt(arr[1]);
  console.log(subin);
  //prompt the user for two numbers and split with a space.
  console.log("Please enter in two numbers with a space inbetween");
}
//prompt the user for two numbers and split with a space.
console.log("Please enter in two numbers with a space inbetween");
process.stdin.on("data",sub);
