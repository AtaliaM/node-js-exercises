const http = require('http');
const url = require('url');
const bodyParser = require("body-parser");


const port = 4000;

const server = http.createServer(function (req, res) {
    console.log(req.method);
    if (req.method === "GET") {
        console.log("in get");
        handleGetRequest(req, res);
    }
    else if (req.method === "POST") {
        handlePostRequest(req, res);
    }
    else if (req.method === "PUT") {
        handlePutRequest(req.res);
    }
    else {
        handleDeleteRequest(req, res);
    }
})

const handleGetRequest = (req,res) => {
    if (req.url === "/products") {
        const jsonProducts = JSON.stringify(products);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonProducts);
    }
    else if (req.url === "/users") {
        const jsonUsers = JSON.stringify(users);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonUsers);
    }
    else {
        const err = "invalid endpoint";
        res.end(err);
    }
}

const handlePostRequest = (req,res) => {
    if (req.url === "/product") {
        parseBody(req, (productData) => {
           if (productData.name && productData.price && Object.keys(productData).length === 2) {
              products.push({name:productData.name, price:productData.price});
              const productJson = JSON.stringify(products);
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(productJson);
           }
        });
     }
  
     if (req.url === "/user") {
        parseBody(req, (userData) => {
           if (userData.name && userData.age && Object.keys(userData).length === 2) {
              const nextUserId = users[users.length-1].id+1;
              users.push({name:userData.name, age:userData.age, id:nextUserId});
              const userJson = JSON.stringify(users);
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(userJson);
           }
        });
     }
    
}




const parseBody = (req, callback) => {
    let body = "";
    req.on("data", (chunk) => {
       body += chunk.toString();
    });
    req.on("end", () => {
       const parsedBody = JSON.parse(body);
       callback(parsedBody);
    });
 };

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


server.listen(port, () => {
    console.log("server up on port" + port);
})

