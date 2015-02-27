// var str = "jack,jill";
// var arr = str.split(",");
// //arr is now ["jack", "jill"]

// function add
//
// takes two numbers as parameters
// returns the sum of the parameters
// use this function to process standard input
//
// prompt the user for two numbers: "Please enter in two numbers with a space inbetween"
// use split to break the input into 2 numbers
// print back to the user the sum of the two numbers
// if the user enters 2 3 you should print out 5

var add = function(numb)
{
  //turn numb into a string and add a space between the inputs in a array
  var arr = numb.toString().split(" ");
  //add the numbers in the array
  var addin = parseInt(arr[0]) + parseInt(arr[1]);
  console.log(addin);
  //prompt the user for two numbers and split with a space.
  console.log("Please enter in two numbers with a space inbetween");
}
//prompt the user for two numbers and split with a space.
console.log("Please enter in two numbers with a space inbetween");
process.stdin.on("data",add);
