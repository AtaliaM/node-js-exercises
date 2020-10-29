const express = require('express');
const mongoose = require('./mongoose');
const Restaurant = require('./part-1');

const app = express();
const port = process.env.PORT || 3000;

//customize our server
app.use(express.json()) //automatically parse incoming json to an object so we can access it in our req handlers

app.post("/restaurant", (req, res) => {
    const restaurant = new Restaurant(req.body);

    console.log(restaurant);
    restaurant.save().then(() => {
        res.status(201).send(restaurant);
    }).catch((e) => {
        res.status(400);
        res.send(e);
    })
})

app.get("/restaurant", (req, res) => {
    Restaurant.find({}).then((restaurants) => {
        res.send(restaurants);
    }).catch((err) => {
        res.status(500).send(err)
    }); //will fetch all restaurants stored in the database. returns a promise

})

///////////// promise chaining ////////////
app.get("/restaurant/countbucuisine/:cuisine", (req, res) => {
    const cuisine = req.params.cuisine;
    Restaurant.find({ cuisine: cuisine }).then((restaurants) => {
        res.send(restaurants);
        return Restaurant.countDocuments({ cuisine: cuisine }).then((result) => {
            console.log(result);
        }).catch((err) => {
            res.status(500).send(err)
        }) 

    })
})


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})