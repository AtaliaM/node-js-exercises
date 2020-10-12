const notes = require("./notes");
const app = require("./app");

describe('addNote', ()=> {
    it('should create note object', ()=> {
        const test = [{"title":"t","body":"b"},{"title":"yo","body":"haa"},{"title":"hey","body":"baa"}];
        const newTask = addTask(test);

        const expected = test.length === 4;

        expect(test.length).toEqual(expected);
    })
})