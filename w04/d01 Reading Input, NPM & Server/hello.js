// Write a command line app
//
// That prints out Type in your input and waits for input
// If the user types in hello (and then hits enter)
// then print out hi!
// Otherwise print out right right
// Bonus: handle the case where the user enter's Hello or HELLO similarly.


//incorrect
// process.stdin.on("data",function(data)
// {
//   if (==="Hello") {
//     newdata = "Hi";
//     var newdata = data.toString().trim();
//     // console.log("Hi");
//   }
// });

//correct code

process.stdin.on("data",function(input)
{
  var processInput = input.toString().trim();
  var message = processInput + " so cool."
  console.log(message);

});
