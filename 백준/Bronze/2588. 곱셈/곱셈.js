const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

const a = Number(input[0]);
const b = input[1];

const one = Number(b[2]);
const ten = Number(b[1]);
const hundred = Number(b[0]);

console.log(a * one);
console.log(a * ten );
console.log(a * hundred);
console.log(a * Number(b));
