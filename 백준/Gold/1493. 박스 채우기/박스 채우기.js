let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const nearestSquare = (num) => {
  let i = 1;

  while ((2 ** i) <= num) {
    i++;
  }

  return i - 1;
}

let length = Number(input[0].split(' ')[0]);
let width = Number(input[0].split(' ')[1]);
let height = Number(input[0].split(' ')[2]);

let N = Number(input[1]);

let cubes = Array(20).fill(0);

for (let i = 2; i <= N + 1; i++) {
  let A = Number(input[i].split(' ')[0]);
  let B = Number(input[i].split(' ')[1]);

  cubes[A] = B;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let count = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8;
  let current = (2 ** i);
  let required = parseInt(length / current) * parseInt(width / current) * parseInt(height / current) - used;

  let usage = Math.min(required, cubes[i]);
  count += usage;
  used += usage;
}

if (used === length * width * height) console.log(count);
else console.log(-1);

