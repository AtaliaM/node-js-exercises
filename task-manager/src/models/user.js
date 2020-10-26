const mongoose = require('mongoose');
const validator = require('validator');

//defining a model
const User = mongoose.model('User', { //constructer function for that model
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) { //validate that people can't enter negative number for their age
            if (value < 0 ) {
                throw new Error ("age must be a positive number")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes("password")) {
                throw new Error("Password cannot contain 'password'");
            }
        }
    }
})

module.exports = User