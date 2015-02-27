console.log("Hello");
var notifier = require('node-notifier');
notifier.notify({
  'title': 'My notification',
  'message': 'Hello, there!'
});
