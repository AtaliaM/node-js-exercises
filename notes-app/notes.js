// const fs = require("fs");
// const chalk = require("chalk");

import fs from './fs';
import chalk from './chalk';

const clearList = () => {
    fs.writeFileSync("notes.json", "");
    try {
      const dataBuffer = fs.readFileSync("notes.json");
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
    } catch (e) {
      return [];
    }
  };
  

const getNotes = () => {
    return "your notes..";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title;
    // })

    const duplicateNote = notes.find((note)=> {
        return note.title === title;
    })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        console.log(chalk.green.inverse("note added!"));
        saveNotes(notes);

    } else {
        console.log(chalk.red.inverse("note title taken"));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("note removed"));
        saveNotes(notesToKeep);
    }
    else {
        console.log(chalk.red.inverse("note wasn't removed"));

    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("your notes:" ))
    let numNotesPrinted = 0
    // notes.forEach(element => {
    //     console.log(element.title);
    // });

    for (let i=0; i<notes.length; i++) {
        console.log(notes[i].title);
        numNotesPrinted++;
    }

    return numNotesPrinted;
}

const readNotes = (title) => {
    const notes = loadNotes();

    const note = notes.find((note)=> {
        return note.title === title;
    })

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }
    else {
        console.log(chalk.red.inverse("note not found"));
    }

    return `${note.title}: ${note.body}`;
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote,
//     removeNote: removeNote,
//     listNotes: listNotes,
//     readNotes: readNotes,
//     loadNotes,
//     clearList,
// }

export default notes;