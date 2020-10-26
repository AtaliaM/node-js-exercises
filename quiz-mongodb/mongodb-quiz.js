const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient //gives the functions that are necessary to connect to the database so we can perform crud operations
const ObjectID = mongodb.ObjectID


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'restaurant';
const databaseName2 = 'college';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => { //the callback is going to be calles when we are connected to the database. async
    if (error) {
        return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);
    console.log("success");

    const db2 = client.db(databaseName2);


    db.collection(databaseName).findOne(
        { "borough": "Bronx", $or: [{ "cuisine": "American " }, { "cuisine": "Chinese" }] }, (err, res) => {
            if (err) {
                console.log('Unable to fetch');
            }
            console.log(res);
        })



    db.collection(databaseName).findOne({ "borough": "Bronx", $or: [{ "cuisine": "American " }, { "cuisine": "Chinese" }] }, (err, res) => {
        if (err) {
            console.log('Unable to fetch');
        }
        console.log(res);
    })


    db2.collection(databaseName2).insertOne({ //async
        name: "Shani Raba",
        address: "Rishon LeZiyon"
    }, (error, result) => { //a callback that will run when the operation is complete
        if (error) {
            return console.log("Unable to insert user");
        }
        client.close();
    })
    // db2.collection(databaseName2).insertOne({ //async
    //     name: "Pinchas Hoddad",
    //     address: "Bat Yam"
    // }, (error, result) => { //a callback that will run when the operation is complete
    //     if (error) {
    //         return console.log("Unable to insert user");
    //     }

    // })

    db2.collection(databaseName2).insertMany([
            {
                name: "Atalia",
                address: "Beit Hanania"
            },
            {
                name:"Felix",
                address: "Petah Tikva"
            }
        ], (error,result)=> {
            if(error) {
                return console.log("Unable to insert documents");
            }
    
            console.log(result.ops);
        })

})

