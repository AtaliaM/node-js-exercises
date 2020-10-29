require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5f9578b2f6eca61e38a9e9ce", {age : 1}).then((user)=> {
    console.log(user);
    return User.countDocuments({age : 1});
}).then((result)=> {
    console.log(result);
}).catch((err)=> {
    console.log(err);
})

//promise chaining to do one thing after another