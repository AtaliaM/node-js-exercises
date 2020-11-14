const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'   //reference to the user model
    }

})

module.exports = Task