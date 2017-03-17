# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

The request/response cylce is manily used on the backend, in retrieving and
directing files and also data to there correct folders

### Question 2: What are the differences between a GET request and a POST request?

Get allow you to render a view from a file. Post allows to you post data or information
to a file

### Question 3: What does `npm init` do?
Initialiizes npm.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?

create read update and delete

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?

POST
### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
inititate the myscript.js

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`


router.post('/menus', function(req, res) {

  res.redirect('/homepage');
});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.
router.get('/:id', function(req, res) {
  res.render('song')
});
```
app.get("/artist/:id/song/:song_id"), function(req, res){

  res.render(`I love song called ${req.params.song}`.)
}
```

### Question 9: What is MVC? How have we been using it so far?

Model View Controller. We've been it to set up our js controllers to render views from hbs.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

app.get('/products', function(req, res) {
  res.send( ${error: "Bad Request"} )
});
