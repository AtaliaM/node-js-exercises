const calculateTip = (total, tipPercent = .25) => {
    const tip = total * tipPercent;
    return total + tip;
}

const farenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8;
}

const celsiusToFarenheit = (temp) => {
    return (temp * 1.8) + 32;
}

const pow = (num) => {
    return (num ** 2);
}

//for exporting several objects//
module.exports = {
    calculateTip,
    farenheitToCelsius,
    celsiusToFarenheit,
    pow
}