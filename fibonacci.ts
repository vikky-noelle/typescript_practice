var readline = require('readline');

// golden number
const phi = (1 - Math.sqrt(5)) / 2;
const Phi = (1 + Math.sqrt(5)) / 2;

function nth_fibonacci(n: number): number {
    return Math.round((Math.pow(Phi, n - 1) - Math.pow(phi, n - 1)) / Math.sqrt(5));
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number n greater than 0 ", function (answer) {
    console.log("The nth value in the fibonacci series is:", nth_fibonacci(answer));
    rl.close();
});

