let fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

let [A, B] = input[0].split(' ').map(Number);

let answer = 1;

while (true) {
  let SplitedB = String(B).split('');

  if (B === A) {
    break;
  }

  if (B % 2 === 0) {
    B /= 2;
    answer++;
    continue;
  }

  if (SplitedB[SplitedB.length - 1] === '1' && B !== 1) {
    B = Number(String(B).slice(0, -1));
    answer++;
    continue;
  }

  answer = -1;
  break;
}

console.log(answer);