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

  // db.collection('Todos').find({_id: new ObjectID('5c701c7220f20c1ead192568')}).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // });
  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // });

db.collection('Users').find({name: 'Fabrizio'}).toArray().then((docs) =>{
  console.log('Users:')
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch Users');
})
  // client.close();

});
