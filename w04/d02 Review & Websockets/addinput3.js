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

// Node-notifier version
//
// output the answer as a notification whenever input is received

process.stdin.on("data",function(numb)
{
  var arr = numb.toString().split(' ');
  var addin = parseInt(arr[0]) + parseInt(arr[1]);
  var notifier = require('node-notifier');
  notifier.notify(
    {
      'title':'My Notification',
      'message':addin
    }
  );
  console.log("Enter two numbers with a space inbetween.");
});
console.log("Enter two numbers with a space inbetween.");
