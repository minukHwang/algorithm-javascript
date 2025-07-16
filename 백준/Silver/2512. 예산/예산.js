let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let M = Number(input[2]);

let first = 1;
let last = arr.reduce((a, b) => Math.max(a, b));

let result = 0;

while (last >= first) {
  let mid = parseInt((first + last) / 2);

  let total = 0;
  for (let i = 0; i < N; i++) {
    total += Math.min(mid, arr[i]);
  }

  if (total > M) {
    last = mid - 1;
  }

  if (total <= M) {
    result = mid;
    first = mid + 1;
  }

}

console.log(result);