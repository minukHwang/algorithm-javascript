const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let counts = Array.from({length: 10}, () => 0 );
let answer = '';

rl.on('line', (line) => {
    line.split('').forEach((digit) => {
        counts[Number(digit)]++;
    });
    rl.close();
}).on('close', () => {
    for(let i = 9; i >= 0; i--){
        let count = counts[i];

        while(count-- > 0){
            answer += `${i}`;
        }
    }

    console.log(answer);
    process.exit(0);
})