const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');


const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '6c7043fd7bbed01ee8483c7553';
//
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
// Todo.find({
//   _id: id
// }).then ( (todos) =>{
//   console.log('Todos:', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then ( (todo) =>{
//   console.log('Todo:', todo)
// });

// Todo.findById(id).then ( (todo) =>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id:', todo)
// }).catch((e) => {
//   console.log(e);
// });


//challenge
var id="5c7043dee554c10e288cd861";

User.findById(id).then((user) =>{
  if(!user){
    return console.log('Id not found');
  }

  console.log('User By Id', user);
}).catch((err) =>{
  console.log(err);
});
