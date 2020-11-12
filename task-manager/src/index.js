const express = require('express');
require('./db/mongoose'); //makes sure the file runs
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req,res,next)=> { //function that is going to run as a middleware - between the request coming to the server and the rout handler actually running
//     console.log(req.method, req.path);
//     if (req.method) {
//         res.send("site under maintenence");
//     }
// })

//customize our server
app.use(express.json()) //automatically parse incoming json to an object so we can access it in our req handlers
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})

// const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const myfunction = async () => {
    // const password = "12345red!";
    // const hashedPassword = await bcrypt.hash(password,8); //the num indicates how many times the hash algorithme is executed

    // console.log(password);
    // console.log(hashedPassword);

    // const isMatched = await bcrypt.compare("12345red!", hashedPassword); //comparing a new input to the stored hash
    // console.log(isMatched);

    const token = jwt.sign({_id: "skfjgwrku"}, "thisisaseries", {expiresIn: "7 days"});
    console.log(token);

    //varyfing our token
    const data = jwt.verify(token, "thisisaseries");
    console.log(data);

}
myfunction();

// const pet = {
//     name: "meli"
// }
// console.log(JSON.stringify(pet)); //when we call res.send, it's calling JSON.stringify behind the scense