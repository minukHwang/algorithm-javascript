let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let heights = input[1].split(' ').map(Number);

let start = 0;
let end = 1000000000;

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;
  for (x of heights) {
    if (x > mid) {
      total += x - mid;
    }
  }

  if (total >= M) {
    result = mid;
    start = mid + 1;
  }

  if (total < M) {
    end = mid - 1;
  }
}

console.log(result);