let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let N = input[0];
let K = input[1];

let sum = 0
for (let i = 1; i < K + 1; i++) {
  sum += i;
}

if (sum > N) console.log(-1);
else {
  N -= sum;
  if (N % K === 0) console.log(K - 1);
  else console.log(K);
}