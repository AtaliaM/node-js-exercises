const {calculateTip, celsiusToFarenheit, farenheitToCelsius} = require('../src/math');

test("hello", ()=> {
//nothing
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

test("should convert farenheit to celsius", ()=> {
    const result = farenheitToCelsius(32);
    expect(result).toBe(0);
})

test("should convert celsius to farenheit", ()=> {
    const result = celsiusToFarenheit(0);
    expect(result).toBe(32);
})

// test("fail", ()=> {
//     throw new Error ("failure");
// })

