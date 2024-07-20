const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);