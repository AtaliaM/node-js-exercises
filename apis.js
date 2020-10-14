const request = require("request");
const axios = require("axios");
const https = require("https");

const url = "https://cat-fact.herokuapp.com/facts";
const url2 = "https://pokeapi.co/api/v2/pokemon/ditto";

///////////////////////////////////////////////////////////////

const usingRequest = () => {
    request({ url: url, json: true }, (error, response) => {
        const rand = Math.floor(Math.random() * 21);
        if (error) {
            console.log("unable to connect to service");
        }
        else {
            console.log(response.body.all[rand].text);
        }
    })
}

//////////////////////////////////////////////////////////////////

const usingAxios = async () => {
    const rand = Math.floor(Math.random() * 21);
    try {
        const response = await axios.get(url2);
        console.log(response);
    }
    catch (error) {
        console.log(error);

    }


}
////////////////////////////////////////////////////////

const usingHttps = () => {
    const requesthttps = https.request(url, (response)=> {
        let data = "";
        response.on("data", (chunk)=> {
            data = data+chunk.toString();
        })
        
        response.on("end", ()=> {
            const responseBody = JSON.parse(data)
            console.log(responseBody);
        })
    })
    requesthttps.on("error", (error)=> {
    console.log("an error", error);
    })
    requesthttps.end();
}

usingHttps();
usingRequest();
usingAxios();


