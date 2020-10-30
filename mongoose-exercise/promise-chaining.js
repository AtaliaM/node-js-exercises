const mongoose = require('./mongoose');
const Restaurant = require('./part-1');

User.findByIdAndUpdate("5f9578b2f6eca61e38a9e9ce", {age : 1}).then((user)=> {
    console.log(user);
    return User.countDocuments({age : 1});
}).then((result)=> {
    console.log(result);
}).catch((err)=> {
    console.log(err);
})