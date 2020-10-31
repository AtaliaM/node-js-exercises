const mongoose = require('mongoose');
const validator = require('validator');

//defining a model
const FriendsAnswers = mongoose.model('User', { //constructer function for that model
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        default: "my home",
    },
    answers: {
        type: Array,
        required: true,
        
    }
})

module.exports = FriendsAnswers