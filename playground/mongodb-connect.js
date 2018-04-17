// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring of es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo : ', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Santosh Panigrahy",
  //   age : 25,
  //   location: "Bangalore"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo : ', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   //console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
