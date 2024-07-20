const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let numbers = [];
let lineCount = 0;
let answer = '';

rl.on('line', (line) => {
    if(lineCount === 0){
        N = Number(line);
        lineCount++;
    } else {
        numbers.push(Number(line));
        if(lineCount === N) rl.close();
        lineCount++;
    }
}).on('close', () => {
     numbers.sort((a, b) => a - b);
     numbers.forEach((number) => {
         answer += number + '\n';
     });
     console.log(answer);
     process.exit(0);
})