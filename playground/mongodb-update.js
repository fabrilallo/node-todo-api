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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c6fe63327e15314ec2c6a0f")
  // },{
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID("5c70292120f20c1ead1928fb")
// }, {
//   $set: {
//     name: 'Fabrizio'
//   }
// }, {
//   returnOriginal: false
// }).then( (result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5c70292120f20c1ead1928fb")
}, {
  $inc: {
    age:5
  },
  $set: {
    name: 'Gian Marco'
  }
}, {
  returnOriginal: false
}).then( (result) =>{
  console.log(result);
});

  // client.close();

});
