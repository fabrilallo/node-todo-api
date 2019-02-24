const express = require('express');
const bodyParser = require('body-parser')
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {ObjectID} = require ('mongodb');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) =>{
    res.send(doc);
  }, (err) =>{
    res.status(400).send(err);
  })
});


app.get('/todos', (req, res) =>{
  Todo.find().then( (todos) =>{
    res.send(todos);
  })
}, (err)=>{
  res.status(400).send(err);
});

app.get('/todos/:id', (req, res) =>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send('Id not valid');
  }

  Todo.findById(id).then( (todo) =>{
      if(!todo){
        return res.status(404).send('Id not found');
      }

      res.send(todo);

    }).catch( (err)=>{
      res.status(400).send(err);
    });
});

app.delete('/todos/:id', (req, res) =>{

  var id= req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send('Id not valid');
  }

  Todo.findByIdAndRemove(id).then( (todo) =>{
    if(!todo){
      return res.status(404).send('Id not found');
    }

    res.send(todo);

  }).catch( (err) =>{
    res.status(400).send(err);
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']); // pick extract properties from object

  if(!ObjectID.isValid(id)){
    return res.status(404).send('Id not valid');
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  }
  else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then( (todo) =>{
    if(!todo){
      return res.satus(404).send();
    }

    res.send(todo);

  }).catch( (err) =>{
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
})

module.exports = {
  app
}
