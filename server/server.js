// http://mongoosejs.com/docs/guide.html
var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var port = process.env.PORT || 3000;

var app = express();

//Body Parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  });
});

app.listen(port, () => {
  console.log('Server started on port : ', port);
});
