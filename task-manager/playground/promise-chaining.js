require("../src/db/mongoose");
const { findByIdAndUpdate } = require("../src/models/user");
const User = require("../src/models/user");
const Task = require("../src/models/tasks");

User.findByIdAndUpdate("5f9578b2f6eca61e38a9e9ce", {age : 1}).then((user)=> {
    console.log(user);
    return User.countDocuments({age : 1});
}).then((result)=> {
    console.log(result);
}).catch((err)=> {
    console.log(err);
})

Task.findByIdAndDelete("609e9beb8d5bf9bb38666705").then((task)=> {
    console.log(task);
    return Task.countDocuments({complete: false});
}).then((result)=> {
    console.log(result);
}).catch((e)=> {
    console.log(e);
})

//promise chaining to do one thing after another


const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({complete:false});
    return count;
}

const updateAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age: age});
    const count = await User.countDocuments({age: age});
    return count;
}

//function calls//
// updateAndCount("5f956b5bf7be432b444cfe27", 100).then((count)=> {
//     console.log(count);
// }).catch((e)=> {
//     console.log(e);
// })

// deleteTaskAndCount("5f9c450be7f7730588d7ec8a").then((count)=> {
//     console.log(count);
// }).catch((e)=> {
//     console.log(e);
// })