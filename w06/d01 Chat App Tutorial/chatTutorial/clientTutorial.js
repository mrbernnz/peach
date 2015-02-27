//Prompting for name.
	var name;
	var myFunction = function() 
	{
	    var person = prompt("Please enter your name");
	    
	    if (person != null)
	    {
	        name = person;
	    };
	};
	myFunction();
	//I created a simple prompt to store the input value into the variable name.

// Starting Connection
	var ws = new WebSocket("ws://localhost:3000");
	// In this example I set the variable to ‘ws’.  This variable is set to a new instance of the constructor Websocket with a localhost pointing to the port 3000.


// Receiving Messages (history)
	ws.addEventListener("message", function(message){})
	// Create an addEventListener to ‘ws’, within the addEventListener the first argument “message” is listening for any incoming message from the server.  The second argument is an anonymous function with a single parameter that I set to “message”.

	var parsedmsg = JSON.parse(message.data);
    parsedmsg.forEach(function(parse)
    {
      var newmsg = parse.name + ": " + parse.message;
      var div = document.getElementById("div");
      var comment = document.createElement("p");
      div.appendChild(comment);
		// In this code block it would be inserted into curler brackets “{}” of the addEventListener.
		// In this example I set the variable to ‘parsedmsg’.  Assign it to the incoming message that will be parsed using JSON, ‘data’ is the property of the object ‘message’. The property data allows you to store the incoming message from the server.

		// Set forEach to parsedmsg and insert an anonymous function as an argument.  For future reference a forEach loop only takes in one argument.  This will loop through every message coming from the server.  Inside the anonymous function, I set a single parameter to parse.  I assign the variable newmsg to the parse dot the keys of the .  I assign the variable div to the element id 'div'.  I assign the variable comment to a created paragraph tag 'p'.  I insert 'comment' into the 'div'. 

		// Adding element to DOM
		      comment.innerHTML = newmsg;
		      console.log(newmsg);
	});

//Sending Message
	  var textbox = document.getElementById('text');
	  textbox.addEventListener("keydown",function(enter)
	  {
	    if (enter.keyCode===13)
	    {
	      var msghash =
	      {
	        name:name,
	        message:document.getElementById("text").value
	      };
	      var msgstrng = JSON.stringify(msghash);
	      ws.send(msgstrng);
	      textbox.value ="";
	    }
	  });
	  // I create an addEventListener to the variable textbox.  It will listen for the press of the keyboard in the first argument.  In the second argument takes an anonymous function with one parameter 'enter'.  I set a if statement to execute only when the keycode equals 13.  Keycodes are values that are assigned to individual keys on a keyboard.  I assign a variable msghash to hash with the keys and values assigned to it.  The name key takes in the value of the variable name.  The message key takes in the value of the input, that is set to the id 'text'.  I assigned the variable msgstrng to string created variable msghash.  If you remember from early 'ws' is an instance of the constructor Websocket.  Here I send 'msgstrng' to the server.  Then I clear the input.

	  var button = document.getElementById('button');
	  button.addEventListener("click",function()
	  {
	    if (textbox.value!=="")
	    {
	      var msghash =
	      {
	        name:name,
	        message:document.getElementById("text").value
	      };
	      var msgstrng = JSON.stringify(msghash);
	      ws.send(msgstrng);
	      textbox.value ="";
	    }
	  });
	  // I create an addEventListener to the variable button.  It will listen for the click of the button in the first argument.  In the second argument takes an anonymous function without a parameter.  I set a if statement to execute only when the variable textbox is not empty.  I assign a variable msghash to hash with the keys and values assigned to it.  The name key takes in the value of the variable name.  The message key takes in the value of the input, that is set to the id 'text'.  I assigned the variable msgstrng to string created variable msghash.  If you remember from early 'ws' is an instance of the constructor Websocket.  Here I send 'msgstrng' to the server.  Then I clear the input.

//Here is the code put together
var name;
var myFunction = function() 
{
    var person = prompt("Please enter your name");
    
    if (person != null)
    {
        name = person;
    };
};
myFunction();

var ws = new WebSocket("ws://localhost:3000");
ws.addEventListener("message", function(message)
{
	var parsedmsg = JSON.parse(message.data);
	parsedmsg.forEach(function(parse)
    {
      var newmsg = parse.name + ": " + parse.message;
      var comment = document.createElement("p");
      var div = document.getElementById("div");
      div.appendChild(comment);
      comment.innerHTML = newmsg;
      console.log(newmsg);
    })
    var textbox = document.getElementById('text');
    textbox.addEventListener("keydown",function(enter)
	{
	    if (enter.keyCode===13)
	    {
	      var msghash =
	      {
	        name:name,
	        message:document.getElementById("text").value
	      };
	      var msgstrng = JSON.stringify(msghash);
	      ws.send(msgstrng);
	      textbox.value ="";
	    }
	});
  	var button = document.getElementById('button');
  	button.addEventListener("click",function()
	{
	    if (textbox.value!=="")
	    {
	      var msghash =
	      {
	        name:name,
	        message:document.getElementById("text").value
	      };
	      var msgstrng = JSON.stringify(msghash);
	      ws.send(msgstrng);
	      textbox.value ="";
	    }
	});
});