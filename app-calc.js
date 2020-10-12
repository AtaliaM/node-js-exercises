const yargs = require('yargs');
const { demandOption } = require('yargs');
const calc = require('./calc');

yargs.version('1.1.0');

yargs.command({
    command: "add",
    describe: "add two numbers",
    builder: {
        num1: {
            describe: "num 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "num 2",
            demandOption: true,
            type: "number",
        }
    },
    handler: function (argv) {
       calc.addTwoNumbers(argv.num1, argv.num2);
    }
})

yargs.command({
    command: "sub",
    describe: "subtract two numbers",
    builder: {
        num1: {
            describe: "num 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "num 2",
            demandOption: true,
            type: "number",
        }
    },
    handler: function (argv) {
       calc.subtractTwoNumbers(argv.num1, argv.num2);
    }
})

yargs.command({
    command: "mul",
    describe: "multiply two numbers",
    builder: {
        num1: {
            describe: "num 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "num 2",
            demandOption: true,
            type: "number",
        }
    },
    handler: function (argv) {
       calc.multiplyTwoNumbers(argv.num1, argv.num2);
    }
})

yargs.command({
    command: "pow",
    describe: "pow two numbers",
    builder: {
        num1: {
            describe: "num 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "num 2",
            demandOption: true,
            type: "number",
        }
    },
    handler: function (argv) {
       calc.powTwoNumbers(argv.num1, argv.num2);
    }
})


console.log(yargs.argv); //yargs know to do its thing and parsing those arguments when we male the commant "yargs.argv"
//we can do this as well:
yargs.parse();
