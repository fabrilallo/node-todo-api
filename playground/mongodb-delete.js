const {MongoClient,ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect((err) => {
  if(!err){
    console.log("Connected successfully to MongoDB server");
  }
  else{
    console.log('Unable to connect to MongoDB server');
  }
  const db = client.db(dbName);

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne (deletes only the first item that matches the criter and then stops)
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  //
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //challenge
  // db.collection('Users').deleteMany({name: 'Fabrizio'}).then( (result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c70280120f20c1ead1928ad')}).then( (result) =>{
    console.log(result);
  });
  // client.close();

});
