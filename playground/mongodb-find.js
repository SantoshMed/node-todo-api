// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring of es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos : ', err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5ad09ecd157e2a19c8d2cb3b')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos : ', err);
  // });

  db.collection('Users').find({name:'Soumili'}).toArray().then((docs) => {
    console.log(`Users  : ${JSON.stringify(docs, undefined, 2)}`);
  }, (err) => {
    console.log('Unable to fetch todos : ', err);
  });

  //client.close();
});
