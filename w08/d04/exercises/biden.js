var express = require('express');
var app = express();
var compliments = {compliment: ["You\'ve got some eyes, kid.", "Hi Sug.", "Who\'s this handsome guy!", "Hi, how are you? I hope you have a big fence around the house.", "Happy Birthday, baby!", "You know what I tell my grand-kids? Take care of your grandfather. That\'s your most important job. No serious guys til you\'re 30.", "You gonna build a fence around the house? A lotta machine guns?", "Call me if you need help on your pecs.", "No serious guys til you\'re 30.", "You\'ve got some killer eyes. The girls are in trouble.", "Thank God you look like your mother.", "Take care of grandpa. That\'s what I tell my grandkids.", "Spread your legs, you\'re gonna be frisked.", "Hey handsome, how are you?", "You have one job. Keep the boys away from your sister.", "A delight to meet you.", "You married up, son. You did real good.", "I love you. I tell you what.", "This is a happy day.", "Take care of him. He’s my best buddy.", "How old are you? Fifteen? I hope mom has a big fence.", "Thank you for being here. I appreciate it very much.", "Good to see you, Mom. What a great day for you.", "You\'re so lucky.", "Hey sister, you\'re beautiful.", "You\'ve got a beautiful sister.", "We have something in common. We both have sisters who are more beautiful and smarter than us.", "We both have something in common -- we both married up.", "Man, what a great family.", "Do you want to get a picture?", "Hey Dad! Welcome to the Old Senate!", "You guys have got some eyes.", "Hi Mom! Good to see you. I\'m Joe Biden.", "I want you next to me.", "You\'ve got a smile that lights up the room.", "You\'ve got a smile that lights up the whole chamber.", "Come on Mom. Take a chance and ruin your reputation here.", "Mom, do you realize in parts of Arizona this would risk your reputation.", "As they say in Southern Delaware, you\'ve done good, boy.", "Other than my mother this is the finest lady I have ever known.", "You are beautiful, holy mackerel.", "Look at those eyes. You have beautiful eyes.", "You guys are beautiful. I bet you\'re smarter than you\'re pretty too.", "Hi baby, how are you?", "Hi honey, how are you?", "You get right in here, baby.", "God love you, man."]}


app.get('/compliment',function(req,res){
  var compliment = JSON.stringify(compliments['compliment'][Math.floor(Math.random()*compliments['compliment'].length)])
res.send(compliment)
});

app.listen(3000,function(){
  console.log('listening on port 3000')
});
