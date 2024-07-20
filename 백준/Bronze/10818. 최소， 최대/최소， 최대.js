const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N;
let numbers = [];
let count = 0;

rl.on('line', (line) => {
    if(count === 0) {
        N = Number(line);
        count++;
    } else if (count === 1) {
        numbers = line.split(' ').map(Number);
        rl.close();
    }
}).on('close', () => {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    console.log(min + " " + max);
    process.exit();
})