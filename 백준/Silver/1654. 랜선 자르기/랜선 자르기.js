let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [K, N] = input[0].split(' ').map(Number);
let lengths = [];

for (let i = 1; i < K + 1; i++) {
  lengths.push(Number(input[i]));
}

let start = 1;
let end = 2 ** 31 - 1;

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;
  for (x of lengths) {
    total += Math.floor(x / mid);
  }

  if (total >= N) {
    result = mid;
    start = mid + 1;
  }

  if (total < N) {
    end = mid - 1;
  }
}

console.log(result);