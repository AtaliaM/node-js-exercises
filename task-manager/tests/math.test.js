const {calculateTip} = require('../src/math');

test("hello", ()=> {

})

test("should calculate total with tip", ()=> {
    const total = calculateTip(10, .3);
    expect(total).toBe(13);
    // if(total !== 13) {
    //     throw new Error("Total should be 13. Got " + total);
    // }
})

test("should calculate total with default tip", ()=> {
    const total = calculateTip(10);
    expect(total).toBe(12.5);
})

// test("fail", ()=> {
//     throw new Error ("failure");
// })

