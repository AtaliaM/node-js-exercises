const geocode = (address,callback) => {

    setTimeout(()=> {
        const data = {
            lat: 0,
            lon: 0
        }
    }, 2000);

    callback(data);

}

geocode("israel", (data) => {
console.log(data);
})


const add = (a,b, callback) => {
    setTimeout(()=> {
        callback(a+b);
    },2000);
}

// add (1,4, (sum)=> {

// })