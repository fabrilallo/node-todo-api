const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all documents
// Todo.remove({}).then( (result) =>{
//   console.log(result);
// });

// Todo.findOneAndRemove

Todo.findByIdAndRemove('5c7043dee554c10e288cd862').then( (todo) =>{
  console.log(todo);
});
