###Assessment
Write a javascript or ruby api that has a rout called '/salad'. When this routeis hit return the following JSON:
    {name: "Basic Salad",
    ingredients:["lettuce","tomatoes","chicken","cheese","croutons"]}

    ```rb
    require 'sinatra'
    require 'JSON'
    get '/salad' do
    content_type :json
    data = {name: 'Basic Salad', ingredients:["lettuce","tomatoes","chicken","cheese","croutons"]}
    data.to_json
    end
    ```
    ```js
    var express = require('express');
    var app = express();
    app.get('/salad',function(req,res){
        data = {name: 'Basic Salad', ingredients:["lettuce","tomatoes","chicken","cheese","croutons"]}
        res.json(data);
        });
        app.listen(3000);
    ```
