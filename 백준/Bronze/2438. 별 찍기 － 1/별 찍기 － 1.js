const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let answer = '';

rl.on('line', (line) => {
    n = Number(line);
    rl.close();
}).on('close', () => {
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            answer += '*';
        }

        if(i === n) break;
        answer += '\n';
    }
    console.log(answer);
    process.exit();
});