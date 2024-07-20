const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let K;
let numbers = [];
let lineCount = 0;

rl.on('line', (line) => {
    if(lineCount === 0) {
        [N, K] = line.split(' ').map(Number);
        lineCount++;
    }else if(lineCount === 1) {
        numbers = line.split(' ').map(Number);
        rl.close();
    }
}).on('close', () => {
    numbers.sort((a, b) => a - b);
    console.log(numbers[K - 1]);
    process.exit(0);
})