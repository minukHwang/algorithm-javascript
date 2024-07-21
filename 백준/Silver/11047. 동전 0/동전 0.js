const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let K;
let coins = [];
let ln = 0;
let count = 0;

rl.on('line', (line) => {
    if(ln === 0) {
        [N, K] = line.split(' ').map(Number);
        ln++;
    }
    else {
        coins.push(Number(line));
        if(ln === N) rl.close();
        ln++;
    }
}).on('close', () => {
    coins.sort((a, b) => b - a);
    coins.forEach((coin) => {
        count += parseInt(K / coin);
        K %= coin;
    })

    console.log(count);
    process.exit(0);
})