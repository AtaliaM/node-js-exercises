const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=b355db041d075887361fa0a456133e33&query=37.8267,%20-122.4233";

request({ url: url, json:true }, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(response);
    // console.log(response.current);
    if (error) {
        console.log("unable to connect to weather service");
    }
    else if (response.body.error) {
        console.log("unable to find location");
    }
    else {
        console.log(`it is currently ${response.body.current.temperature} degrees out. it feels like ${response.body.current.feelslike} degrees out`);
    }

})