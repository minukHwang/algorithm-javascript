let fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim();

let s = Number(input);
let current = 0;
let sum = 0;

while (sum <= s) {
  current += 1;
  sum += current;
}

console.log(current - 1);