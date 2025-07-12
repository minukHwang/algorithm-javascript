let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1])

let T = input[0];

for (let i = 1; i < T + 1; i++) {
  let n = input[i];

  let result = [];
  let index = pibo.length - 1;

  while (n > 0) {
    if (n >= pibo[index]) {
      n -= pibo[index];

      result.push(pibo[index]);
    }

    index--;
  }

  let answer = '';
  for (let i = result.length - 1; i >= 0; i--) {
    answer += result[i] + ' ';
  }

  console.log(answer);
}


