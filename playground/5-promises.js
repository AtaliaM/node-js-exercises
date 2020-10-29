const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
}

add(1, 2).then((sum) => { //a single asunc operation
    console.log(sum);

    add(sum, 5).then((sum2) => {
        console.log(sum2);
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})
/////

add(1,1).then((sum)=> {
console.log(sum);
return add(sum,4) //returning a promise from my then callback
}).then((sum2)=> {
    console.log(sum2);
}).catch((err)=> {
    console.log(err);
})