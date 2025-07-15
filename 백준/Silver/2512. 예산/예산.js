let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let requests = input[1].split(' ').map(Number);
let M = Number(input[2]);

let start = 1;
let end = requests.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of requests) {
    total += Math.min(mid, x);
  }

  if (total <= M) {
    result = mid;
    start = mid + 1;
  }
  else {
    end = mid - 1;
  }
}

console.log(result);