const express = require('express');
const router = new express.Router();
const Task = require("../models/tasks");
const auth = require("../middleware/auth");
const { findOneAndDelete } = require('../models/tasks');


router.post("/tasks", auth, async (req, res) => {
    // const task = new Task(req.body);
    const task = new Task({
        ...req.body, //copiyng all the properties from body
        owner: req.user._id
    })

    try {
        await task.save();
        res.status(201).send(task);
    }
    catch (e) {
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

router.patch("/tasks/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "complete"];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValidOperation) {
        res.status(400).send(({ error: "Invalid update" }));
    }

    try {
        // const task = await Task.findById(req.params.id);
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send();
        }
        
        updates.forEach((update) => {
            task[update] = req.body[update];
        })
        await task.save();
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

        res.send(task);
    }
    catch (e) {
        res.status(400).send(e);
    }
})


router.get("/tasks", auth, async (req, res) => {

    try {
        const tasks = await Task.find({ owner: req.user._id });
        res.send(tasks);
    }
    catch (e) {
        res.status(500).send();
    }

    // Task.find({}).then((tasks)=> {
    //     res.send(tasks);
    // }).catch((err)=> {
    //     res.status(500).send()
    // }); //will fetch all tasks stored in the database. returns a promise

})

router.get("/tasks/:id", auth, async (req, res) => {
    const _id = req.params.id;

    try {
        // const task = await Task.findById(_id);
        const task = await Task.findOne({ _id, owner: req.user._id })
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }
    catch (e) {
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

router.delete("/tasks/:id",auth, async (req, res) => {
    try {
        // const task = await Task.findByIdAndDelete(req.params.id);
        const task = await findOneAndDelete({_id: req.params.id, owner: req.user._id})
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }
    catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;
