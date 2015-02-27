process.stdin.on("data",function(inpt)
{
  var prcssinpt = inpt.toString().trim();
  var notifier = require('node-notifier');
  var cowsay = require('cowsay');
  var cowtext = cowsay.say({text:"Mooo!"});
  var opt = {};
  // opt["title"] = "My Notification";
  // opt["message"] = prcssinpt;
  notifier.notify({"title":"My Notification","message":prcssinpt});
  console.log(cowtext);
});

  // if (prcssinpt) {
  //   process.exit();
  // }
  // else {
  //   console.log("Press Enter");
  // }
// console.log("Press Enter");
//
// console.log("Hello");
// var notifier = require('node-notifier');
// notifier.notify({
//   'title': 'My notification',
//   'message': 'Hello, there!'
// });
