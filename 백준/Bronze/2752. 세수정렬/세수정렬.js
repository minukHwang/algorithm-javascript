const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
    arr = line.split(' ').map(Number);
    rl.close();
}).on('close', () => {
    arr.sort((a, b) => a - b)
    console.log(...arr);
})