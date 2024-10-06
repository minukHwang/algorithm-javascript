const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
let count = -1;

rl.on('line', (line) => {
  num = Number(line);
  rl.close();
}).on('close', () => {
  let maxFive = parseInt(num / 5);

  for (let i = 0; i <= maxFive; i++) {
    let leftAmount = (num % 5) + (5 * i);
    if (leftAmount % 3 === 0) {
      count = (maxFive - i) + (parseInt(leftAmount / 3));
      break;
    }
  }

  console.log(count);
})