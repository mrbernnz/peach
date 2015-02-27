var WscatClient = require("ws");
var flag = process.argv[2];
var portarg = process.argv[3];
if (flag !== "-c" || !portarg)
  {
    console.log("bad input");
    process.exit(1);
  };
  var client = new WscatClient("ws://localhost:" + portarg);
  // var server;
  var connected = false;
  ws.on("open",function()
  {
    if (connected===true)
      {
        console.log("connecting to server on port " + portarg + " (press cntrl-C to exit)");
        ws.on("message",function(msg)
        {
          console.log(msg);
        });
        ws.on("close",function()
        {
          console.log("I'll be back!");
          process.exit(1);
        })
      };
    });

    process.stdin.on("data",function(input)
    {
      var processInput = input.toString().trim();
      ws.send(input);
    });
