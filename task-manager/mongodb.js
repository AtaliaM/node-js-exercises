const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient //gives the functions that are necessary to connect to the database so we can perform crud operations
const ObjectID = mongodb.ObjectID


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID() //going to generate a new id for us
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology:true}, (error,client)=> { //the callback is going to be calles when we are connected to the database. async
    if(error) {
        return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName); //gives back a database reference, connection for the specific database
    /////////////    create //////////////
    // db.collection('users').insertOne({ //async
    //     _id: id,
    //     name: "myself",
    //     age: 29
    // }, (error,result)=> { //a callback that will run when the operation is complete
    //     if(error) {
    //         return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops); //contains an array with our document/documents
    // }); //inserting document into the 'users' collection

    // db.collection('users').insertMany([
    //     {
    //         name: "batel",
    //         age: 27
    //     },
    //     {
    //         name:"nava",
    //         age: 61
    //     }
    // ], (error,result)=> {
    //     if(error) {
    //         return console.log("Unable to insert documents");
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         task: "laundery",
    //         status: true
    //     },
    //     {
    //         task: "dishes",
    //         status: false
    //     },
    //     {
    //         task: "water plants",
    //         status: true
    //     }
    // ], (error,result)=> {
    //     if(error) {
    //         return console.log("Unable to insert documents");
    //     }
    //     console.log(result.ops);
    // })

    ////////     read ////////


    //to search by object id, we must convert it first to Binary like this = new ObjectID("id here")
    db.collection('users').findOne({name:"Atalia"}, (error,document)=> {
        if(error) {
            return console.log("Unable to fetch user");
        }
        console.log(document);
    })

    db.collection('users').find({age:29}).toArray((error,documents)=> { //return a cursor/pointer, and we can run all sort of methods on it
        if(error) {
            return console.log("Unable to fetch user");
        }
        console.log(documents);
    }) 

    db.collection('tasks').findOne({_id: new ObjectID("5f8ece4cac2e8f13442f6b62")}, (error,document)=> {
        if(error) {
            return console.log("Unable to fetch user");
        }
        console.log(document);
    })

    db.collection('tasks').find({status:true}).toArray((error,documents)=> { 
        if(error) {
            return console.log("Unable to fetch user");
        }
        console.log(documents);
    }) 

})

