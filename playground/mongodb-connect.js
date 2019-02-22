const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect((err) => {
  if(!err){
    console.log("Connected successfully to server");
  }
  else{
    console.log('Unable to connect to MongoDB server');
  }
  const db = client.db(dbName);


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) =>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Fabrizio',
    age: 23,
    location: 'Foggia'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined , 2));
  });
  client.close();

});
