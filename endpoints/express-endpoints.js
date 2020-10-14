const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());

const users = [
    {
        name: "atalia",
        age: "29",
        id: 0
    },
    {
        name: "someone",
        age: "25",
        id: 1,
    },
    {
        name: "noone",
        age: "31",
        id: 2,
    },

];
let userId = 3;

const products = [
    {
        name: "prod1",
        price: "500",
    },
    {
        name: "prod2",
        price: "30",
    }
]

let productsId = 2;

//get products
app.get("/products", (req, res) => {
    res.send(products);
})

//add product
app.post("/product", (req, res) => {
    const productData = req.body;
    if (productData.name && productData.price && Object.keys(productData).length === 2) {
        const newProduct = {
            name: productData.name,
            price: productData.price,
            id: productsId,
        }
        productsId++;
        products.push(newProduct);
        res.status(200);
        res.send(newProduct);
    }
    else {
        res.send("error");
    }
})




//get users
app.get("/users", (req, res) => {
    res.send(users);
})

//add user
app.post("/user", (req, res) => {
    const userData = req.body;
    if (userData.name && userData.age && Object.keys(userData).length === 2) {
        const newUser = {
            name: userData.name,
            age: userData.age,
            id: userId,
        }
        userId++;
        users.push(newUser);
        res.status(200);
        res.send(newUser);
    }
    else {
        res.send("error");
    }
})

//delete user
app.delete("/user", (req, res) => {
    let userToDelete;
    if (!req.query.id) {
        return res.send({
            error: "you must provide an id",
        })
    }

    for (let i = 0; i < users.length; i++) {
        if (Number(users[i].id) === Number(req.query.id)) {
            userToDelete = i;
            users.splice(userToDelete, 1);
            break;
        }
    }

    // console.log(req.query.id);
    // console.log(users[0].id);
    res.status(200);
    res.send(users);
})

//edit user
app.put("/user", (req, res) => {
    const userData = req.body;
    let userToUpdate;
    if (!req.query.id) {
        return res.send({
            error: "you must provide an id",
        })
    }
    if (userData.name || userData.age) {
        for (let i = 0; i < users.length; i++) {
            if (Number(users[i].id) === Number(req.query.id)) {
                userToUpdate = i;
            }
            const updatedUser = {
                name: userData.name,
                age: userData.age,
                id: req.query.id
            }
            users.splice(userToUpdate, 1, updatedUser);
            break;
        }

        res.status(200);
    }
    else {
        return res.send({
            error: "invalid info",
        })
    }

    res.send(users);
})


app.listen(3000, () => {

    console.log("server up");

}) //starts up the server and sending callback func that runs when the server is up and running