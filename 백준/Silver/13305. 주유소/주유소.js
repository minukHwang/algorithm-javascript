let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let length = input[1].split(' ').map(Number);
let price = input[2].split(' ').map(Number);

let total = BigInt(0);
let minPrice = price[0];

for (let i = 0; i < N - 1; i++) {
  if (price[i] < minPrice) {
    minPrice = price[i];
  }

  total += BigInt(minPrice) * BigInt(length[i]);
}

console.log(String(total));
