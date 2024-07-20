const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let a;
let b;
let answer = '';
let count = 0;

rl.on('line', (line) => {
    if(count === 0) {
        n = Number(line);
    } else {
        [a, b] = line.split(' ').map(Number);
        answer += a + b + '\n';
        if(count === n) {
            rl.close();
        }
    }
    count++;
}).on('close', () => {
    console.log(answer);
    process.exit();
})