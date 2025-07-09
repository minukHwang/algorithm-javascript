let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arrows = input[1].split(' ').map(Number);

let total = 0;
let count = new Array(1000001).fill(0);

for (let i = 0; i < N; i++) {
  let currentH = arrows[i];

  if (count[currentH] > 0) {
    count[currentH]--;
  } else {
    total++;
  }

  count[currentH - 1]++;
}

console.log(total);
