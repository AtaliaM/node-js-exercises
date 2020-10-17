const http = require('http');
const url = require('url');
const bodyParser = require("body-parser");


const port = 4000;

const server = http.createServer(function (req, res) {
    if (req.method === "GET") {
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
        res.end(jsonProducts);
    }
    else if (req.url === "/users") {
        const jsonUsers = JSON.stringify(users);
        res.end(jsonUsers);
    }
    else {
        const err = "invalid endpoint";
        res.end(err);
    }
}

const handlePostRequest = (req,res) => {
   
    
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



// //add product
// app.post("/product", (req, res) => {
//     const productData = req.body;
//     if (productData.name && productData.price && Object.keys(productData).length === 2) {
//         const newProduct = {
//             name: productData.name,
//             price: productData.price,
//             id: productsId,
//         }
//         productsId++;
//         products.push(newProduct);
//         res.status(200);
//         res.send(newProduct);
//     }
//     else {
//         res.send("error");
//     }
// })




// //add user
// app.post("/user", (req, res) => {
//     const userData = req.body;
//     if (userData.name && userData.age && Object.keys(userData).length === 2) {
//         const newUser = {
//             name: userData.name,
//             age: userData.age,
//             id: userId,
//         }
//         userId++;
//         users.push(newUser);
//         res.status(200);
//         res.send(newUser);
//     }
//     else {
//         res.send("error");
//     }
// })

// //delete user
// app.delete("/user", (req, res) => {
//     let userToDelete;
//     if (!req.query.id) {
//         return res.send({
//             error: "you must provide an id",
//         })
//     }

//     for (let i = 0; i < users.length; i++) {
//         if (Number(users[i].id) === Number(req.query.id)) {
//             userToDelete = i;
//             users.splice(userToDelete, 1);
//             break;
//         }
//     }

//     // console.log(req.query.id);
//     // console.log(users[0].id);
//     res.status(200);
//     res.send(users);
// })

// //edit user
// app.put("/user", (req, res) => {
//     const userData = req.body;
//     let userToUpdate;
//     if (!req.query.id) {
//         return res.send({
//             error: "you must provide an id",
//         })
//     }
//     if (userData.name || userData.age) {
//         for (let i = 0; i < users.length; i++) {
//             if (Number(users[i].id) === Number(req.query.id)) {
//                 userToUpdate = i;
//             }
//             const updatedUser = {
//                 name: userData.name,
//                 age: userData.age,
//                 id: req.query.id
//             }
//             users.splice(userToUpdate, 1, updatedUser);
//             break;
//         }

//         res.status(200);
//     }
//     else {
//         return res.send({
//             error: "invalid info",
//         })
//     }

//     res.send(users);
// })

