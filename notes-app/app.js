// const fs = require('fs');
// const add = require('./utils');
// const validator = require('validator');
const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');
// // fs.writeFileSync('notes.txt', 'this files was created by me');

// fs.appendFileSync('notes.txt', "I'm so cool");

// const sum = add(4,5);
// console.log(sum);

// const result = getNotes();
// console.log(result);

// console.log(chalk.green.bold.inverse("success"));
// const command = process.argv[2];
console.log(process.argv);

//create add command//
yargs.version('1.1.0');

yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true, //stating if the property 'title' is required
            type: "string", //the value must be string
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string",
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title, argv.body)
    }
})


//remove command//
yargs.command({
    command: "remove",
    describe: "remove note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string",
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

//list command//

yargs.command({
    command: "list",
    describe: "list all notes",
    handler: function () {
        notes.listNotes();
    }
})

yargs.command({
    command: "read",
    describe: "reading note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.readNotes(argv.title);
    }
})

console.log(yargs.argv); //yargs know to do its thing and parsing those arguments when we male the commant "yargs.argv"
//we can do this as well:
yargs.parse();




