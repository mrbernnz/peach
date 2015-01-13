#Sinatra

For this exercise, you should create a Sinatra folder hierarchy for testing purposes. It is only necessary to send your instructor the code. In the views folder create a file called index.erb.

index.erb should have a heading tag that has an inner text of "Hello world".

Write a Sinatra server file. When receiving the route '/' the server should serve index.erb.

##BONUS

Add another file in views called name.erb; it should have a p tag that says "hello, " and then your name. Your name should not be hard coded into the erb file, it should come from the locals hash in your server.

When receiving the route '/name', the server should serve name.erb and your name as a local variable. Your name should be hardcoded into the Sinatra server.
