const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numbers = new Array(7).fill(0);
let prize = 0;
let max = 0;

rl.on('line', (line) => {
    line.split(' ').forEach((input) => {
        numbers[Number(input)]++;
    })
    rl.close();
}).on('close', () => {
    for(let i = 1; i < 7; i++){
        if(numbers[i] === 3) {
            prize = 10000 + i * 1000;
            break;
        } else if (numbers[i] === 2){
            prize = 1000 + i * 100;
            break;
        } else if (numbers[i] === 1){
            max = i;
        }
    }

    if(prize === 0) {
        prize = max * 100;
    }

    console.log(prize);
})