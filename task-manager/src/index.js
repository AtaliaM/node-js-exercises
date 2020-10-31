const express = require('express');
require('./db/mongoose'); //makes sure the file runs
const User = require('./models/user');
const Task = require('./models/tasks');

const app = express();
const port = process.env.PORT || 3000;

//customize our server
app.use(express.json()) //automatically parse incoming json to an object so we can access it in our req handlers

app.post("/users", async (req, res) => {
    const user = new User(req.body);
    //async await
    try {
        await user.save()   //save the user
        res.status(201).send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }

    console.log(user);
    //promises
    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((e) => {
    //     res.status(400);
    //     res.send(e);
    // })
})

app.get("/users", async(req,res)=> {

    try {
        const users = await User.find({});
        res.send(users);
    }
    catch(e) {
        res.status(500).send();
    }

    // User.find({}).then((users)=> {
    //     res.send(users);
    // }).catch((err)=> {
    //     res.status(500).send()
    // }); //will fetch all users stored in the database. returns a promise

})

app.get("/users/:id", async (req,res)=> {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    }
    catch (e) {
        res.status(500).send()
    }

    // User.findById(_id).then((user)=> {
    //    if(!user) {
    //        return res.status(404).send();
    //    }
    //    res.send(user);
    // }).catch((err)=> {
    //     res.status(500).send()
    // }); 

})

//patch is designed for updating existing resources
app.patch("/users/:id", async(req,res)=> {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["email", "name", "password", "age"];
    const isValidOperation = updates.every((update)=> {
        return allowedUpdates.includes(update);
    }) //if I'll return true for every item, every will return true, otherwise, it will return false

    if(!isValidOperation) {
        return res.status(400).send({error: "invalid update"});
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true});

        if(!user) {
            return res.status(404).send()
        }
        res.send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
})

//deleting user//
app.delete("/users/:id", async(req,res)=> {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

app.post("/tasks", async(req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    }
    catch(e) {
        res.status(400).send(e);
    }

    console.log(task);
    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((e) => {
    //     res.status(400);
    //     res.send(e);
    // })
})

app.patch("/tasks/:id", async(req,res)=> {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "complete"];
    const isValidOperation = updates.every((update)=> {
        return allowedUpdates.includes(update);
    })

    if(!isValidOperation) {
        res.status(400).send(({error: "Invalid update"}));
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    }
    catch(e) {
        res.status(400).send(e);
    }
})


app.get("/tasks", async(req,res)=> {

    try {
        const tasks = await Task.find({});
        res.send(tasks);
    }
    catch(e) {
        res.status(500).send();
    }

    // Task.find({}).then((tasks)=> {
    //     res.send(tasks);
    // }).catch((err)=> {
    //     res.status(500).send()
    // }); //will fetch all tasks stored in the database. returns a promise

})

app.get("/tasks/:id", async (req,res)=> {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    }
    catch(e) {
        res.status(500).send();
    }

    // Task.findById(_id).then((task)=> {
    //    if(!task) {
    //        return res.status(404).send();
    //    }
    //    res.send(task);
    // }).catch((err)=> {
    //     res.status(500).send()
    // }); 

})

app.delete("/tasks/:id", async (req,res)=> {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    }
    catch(e) {
        res.status(500).send(e);
    }
})


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})