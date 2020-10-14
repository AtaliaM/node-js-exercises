const notes = require("./notes");
const app = require("./app");

describe('addNote', ()=> {
    it('should create note object', ()=> {
        notes.clearList();
        notes.addNote("hello", "world");
        const result = notes.loadNotes();

        const expected = [{"title":"hello", "body":"world"}];

        expect(result).toEqual(expected);
    })

    it('shouldnt add another note with existing title', ()=> {
        notes.clearList();
        notes.loadNotes();
        notes.addNote("hello", "world");
        notes.addNote("hello", "world");
        const result = notes.loadNotes();

        const expected = [{"title":"hello", "body":"world"}];

        expect(result).toEqual(expected);
    })
})

describe('removeNote', ()=> {
    it('should do nothing', ()=> {
        
        notes.clearList();
        const result = notes.loadNotes();

        const expected = [];

        expect(result).toEqual(expected);
    })

    it('should remove note', ()=> {
        notes.addNote("hello", "world");
        notes.removeNote("hello");

        const result = notes.loadNotes();
        const expected = [];

        expect(result).toEqual(expected);
    })
})

describe('listNotes', ()=> {
    it('should list all your notes', ()=> {
        notes.clearList();
        notes.addNote("hello", "world");
        notes.addNote("bye", "universe");
        const data = notes.loadNotes();
        const result = notes.listNotes();

        const expected = data.length;

        expect(result).toEqual(expected);
    })
})
describe('readNotes', ()=> {
    it('should read specific note', ()=> {
        notes.clearList();
        notes.addNote("hello", "world");
        const data = notes.loadNotes();
        const result = notes.readNotes("hello");

        const expected = "hello: world";

        expect(result).toEqual(expected);
    })
})

