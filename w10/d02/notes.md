###Topic
- OAuth

```html
<!-- in views folder/index.html -->
<form action='login' method='GET'>
  <input name='password'>

<!-- secret.html -->
<h1>shhh</h1>
```
```js
// in server.js
var secret = 'penguin'
app.get('/', function(requires))
app.get('/',function(req,res){
    res.sendFile('/public', __dirname + '/index.html');
    });
get '/'
get '/login'
    if (params['password']=== secret){
        res.redirect('/secret_page')
    }
    else {
        res.redirect('/')
    }
get '/secret_page'
```
