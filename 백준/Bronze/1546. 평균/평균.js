const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let scores = [];
let count = 0;

rl.on('line', (line) => {
    if(count === 0) {
        N = Number(line);
        count++;
    } else if (count === 1) {
        scores = line.split(' ').map(Number);
        rl.close();
    }
}).on('close', () => {
    const maxScore = Math.max(...scores);
    const newScores = scores.map((score) => score/maxScore*100);
    const newSum = newScores.reduce((a, b) => a + b);
    const newAvg = newSum / N;
    console.log(newAvg);
    process.exit(0);
})