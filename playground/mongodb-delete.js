// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring of es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Users').deleteMany({name: "Avirup"}).then((result) => {
  //   console.log(result)
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ad5c1a2816870b0e5bd3ee3")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //client.close();
});
