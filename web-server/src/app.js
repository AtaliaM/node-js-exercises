const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//define paths for express config
// console.log(path.join(__dirname, "../public")); //returns the final path

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPaths = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs"); //for handlebars
app.set("views", viewsPath);
hbs.registerPartials(partialPaths);

app.get("", (req, res) => {
    res.render("index", {
        title: "sometitle",
        name: "atalia mucharsky",
    })
})
app.get("/about", (req, res) => {
    res.render("about", {
        about: "about me",
        name: "atalia mucharsky",
    })
})
app.get("/bla", (req, res) => {
    res.render("bla", {
        title: "blabla",
        name: "atalia mucharsky",
    })
})

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get("", (req, res)=> {
    res.send("<h1>Hey!</h1>");


})
app.get("/help", (req, res)=> {
    res.send([
        {
            trial : 1,
        },
        {
            trial: 2,
        }
    ]);


})
app.get("/about", (req, res)=> {
    res.send({
        name: "Atalia",
        age: "29"
    });


})

app.get("/weather", (req, res)=> {

    if(!req.query.address) { //andpoint created
        return res.send({
            error: "you must provide an address",
        })
    }

    geocode(req.query.address, (error, {lat, lon, location})=> {
        if(error) {
            return res.send({error});
        }

        forecast(lat,lon, (error,forecadtData)=> {
            if(error) {
                res.send({error});
            }
            res.send({
                forecast: forecastData,
                location: location,
                address: req,query,address,
            })
        })
    })
    // res.send({
    //     location: "Beit Hanania",
    //     forecast: "hotttt",
    //     address: req.query.address,
    // });

})

app.get("/products", (req,res)=> {
   if (!req.query.search) { //if search term provided
    return res.send({ //send back some json
        error: "you must provide search term",
    })
   }
    res.send({
        products: [],
    })
})

app.get("/help/*", (req, res)=> { // * means everything is a match
    res.render("404", {
        title: "404 help",
        name: "atalia",
        errorMessage: "help article not found",
    });
})

app.get("*", (req, res)=> { // * means everything is a match
    res.render("404", {
        title: "404",
        name: "Atalia",
        errorMessage: "page not found",
    })
})

app.listen(3000, () => {

    console.log("server up");

}) //starts up the server and sending callback func that runs when the server is up and running