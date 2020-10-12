const fs = require("fs");

// const book = {
//     title: "harry potter",
//     author: "jk rowling",
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON); 

const dataBuffer = fs.readFileSync("1-json.json"); //binary data
const dataJSON = dataBuffer.toString(); //standart string in js
const data = JSON.parse(dataJSON); //parsed that into an object

console.log(data.title); //accsessing property

const dataBuffer2 = fs.readFileSync("1-json.json");
const dataJSON2 = dataBuffer2.toString();
const user = JSON.parse(dataJSON2);

user.name = "meli";
user.word= "burrrr";

const userJSON = JSON.stringify(user); // the new data we want to write
fs.writeFileSync("1-json.json", userJSON); ///override the original data



