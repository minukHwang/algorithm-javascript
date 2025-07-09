let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().toString().split('\n');

let N = input[0];
let time = [];

for (let i = 0; i < N; i++) {
  time.push(input[i + 1].split(' ').map(Number));
}

time.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0]
});

let count = 0;
let endTime = -1;

for (let i = 0; i < N; i++) {
  if (time[i][0] >= endTime) {
    count++;
    endTime = time[i][1];
  }
}

console.log(count);