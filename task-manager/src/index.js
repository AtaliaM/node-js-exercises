const express = require('express');
require('./db/mongoose'); //makes sure the file runs
const User = require('./models/user');
const Task = require('./models/tasks');

const app = express();
const port = process.env.PORT || 3000;

//customize our server
app.use(express.json()) //automatically parse incoming json to an object so we can access it in our req handlers

app.post("/users", (req, res) => {
    const user = new User(req.body);

    console.log(user);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400);
        res.send(e);
    })
})

app.get("/users", (req,res)=> {
    User.find({}).then((users)=> {
        res.send(users);
    }).catch((err)=> {
        res.status(500).send()
    }); //will fetch all users stored in the database. returns a promise

})

app.get("/users/:id", (req,res)=> {
    const _id = req.params.id;
    User.findById(_id).then((user)=> {
       if(!user) {
           return res.status(404).send();
       }
       res.send(user);
    }).catch((err)=> {
        res.status(500).send()
    }); //will fetch all users stored in the database. returns a promise

})

app.post("/tasks", (req, res) => {
    const task = new Task(req.body);

    console.log(task);
    task.save().then(() => {
        res.status(201).send(task);
    }).catch((e) => {
        res.status(400);
        res.send(e);
    })
})


app.get("/tasks", (req,res)=> {
    Task.find({}).then((tasks)=> {
        res.send(tasks);
    }).catch((err)=> {
        res.status(500).send()
    }); //will fetch all tasks stored in the database. returns a promise

})

app.get("/tasks/:id", (req,res)=> {
    const _id = req.params.id;
    Task.findById(_id).then((task)=> {
       if(!task) {
           return res.status(404).send();
       }
       res.send(task);
    }).catch((err)=> {
        res.status(500).send()
    }); //will fetch all users stored in the database. returns a promise

})


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})