const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim();

const num = Number(input);
let answer = '';

for(let i = 1; i < 10; i++) {
    answer += `${num} * ${i} = ${num * i}` + '\n'
}

console.log(answer);