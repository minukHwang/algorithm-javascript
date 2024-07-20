const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numbers = [];

rl.on('line', (line) => {
    numbers = line.split(' ');
    rl.close();
}).on('close', () => {
    const newNumbers = numbers.map((number) => {
        let newNumber = '';
        for(let i = number.length - 1; i >= 0; i--){
            newNumber += number.charAt(i);
        }
        return Number(newNumber);
    })

    console.log(Math.max(...newNumbers));
})