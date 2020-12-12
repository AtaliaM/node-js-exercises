const calculateTip = (total, tipPercent = .25) => {
    const tip = total * tipPercent;
    return total + tip;
}

//for exporting several objects//
module.exports = {
    calculateTip
}