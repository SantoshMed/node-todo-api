// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring of es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5ad5bf0e816870b0e5bd3dfa")
  // },{
  //   $set: { //mongodb update operators
  //     completed:true
  //   }
  // },{
  //   returnOriginal: false // By default returnOriginal Value is true, which will return the origina value not tha updated one.
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  db.collection('Users').updateMany({
    name: 'Soumili'
  },{
    $set: { //mongodb update operators
      name:'Soumili Ghosh'
    },
    $inc: {
      age: -1
    }
  },{
    returnOriginal: false // By default returnOriginal Value is true, which will return the origina value not tha updated one.
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //client.close();
});
