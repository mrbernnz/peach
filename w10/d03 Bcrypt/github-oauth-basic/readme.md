# Github OAuth Example

#### Files
* `secret.json`: you have to make this file with the following format

  ```json
  {
    "client_id": "client-id-goes-here",
    "client_secret": "client-secret-goes-here"
  }
  ```

* [index.html](index.html): the initial page that is loaded
* [server.js](server.js)
  * `GET` `/`
    * Serves up `index.html`
  * `GET` `/login`
    * Github redirects back here after the user logs in
    * Uses `request` to go back to github with the `code`, `client_id`, and `client_secret` to retrieve an `access_token`
    * Renders into `ajax.ejs` with the retrieved acess_token
* [ajax.ejs](ajax.ejs):
  * An example of making OAuth dependent API calls through AJAX.
  * It is an EJS so that the `access_token` can be rendered into it
* [request_example.js](request_example.js)
  * An example of reaching an OAuth dependent API from the server
  * You have to grab a real oauth token first and put it in the `access_token` string
