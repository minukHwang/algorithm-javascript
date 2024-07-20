const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let input = [];
let answer = '';
let count = 0;

rl.on('line', (line) => {
    if(count === 0){
        N = Number(line);
        count++;
    } else {
        input.push(line.split(' '));
        if(count === N) rl.close();

        count++;
    }
}).on('close', () => {
    input.forEach((item) => {
        const cnt = item[0];

        for(let letter of item[1]){
           answer += letter.repeat(cnt);
        }

        answer += '\n';
    })

    console.log(answer);
    process.exit(0);
});

