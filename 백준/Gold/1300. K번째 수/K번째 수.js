let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let K = Number(input[1]);

let start = 1;
let end = N * N;


let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += Math.min(parseInt(mid / i), N);
  }

  if (total >= K) {
    result = mid;
    end = mid - 1;
  }

  if (total < K) start = mid + 1;
}

console.log(result);