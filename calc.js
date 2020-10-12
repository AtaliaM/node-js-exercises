

const addTwoNumbers = (num1, num2) => {
    console.log(num1+num2);
    return num1 + num2;
}

const subtractTwoNumbers = (num1, num2) => {
    console.log(num1-num2);
    return num1 - num2;
}

const multiplyTwoNumbers = (num1, num2) => {
    console.log(num1*num2);
    return num1 * num2;
}

const powTwoNumbers = (num1, num2) => {
    console.log(num1**num2);
    return num1 ** num2;
}




module.exports = {
    addTwoNumbers: addTwoNumbers,
    subtractTwoNumbers: subtractTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    powTwoNumbers: powTwoNumbers,

    
}