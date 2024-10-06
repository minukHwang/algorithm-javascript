const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1. + 가 오면 괄호를 치지 않는다.
// 2. - 가 오면 뒤에 + 가 있다면 괄호로 묶는다.
// 3. - 가 오고 뒤에 - 가 오면 괄호를 굳이 치지 않는다.

let input;


rl.on('line', (line) => {
  input = line.split('');
  rl.close();
}).on('close', () => {
  let letter = '';
  let numbers = [];
  let calc = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '+' || input[i] === '-') {
      numbers.push(Number(letter));
      letter = '';
      calc.push(input[i]);
      continue;
    }

    letter += input[i];
  }

  numbers.push(Number(letter));

  let addedNumber = numbers[0];
  let addedNumbers = [];

  for (let i = 0; i < calc.length; i++) {
    if (calc[i] === '+') {
      addedNumber += numbers[i + 1];
    } else {
      addedNumbers.push(addedNumber);
      addedNumber = numbers[i + 1];
    }
  }

  addedNumbers.push(addedNumber);

  let subtractedNumber = addedNumbers[0];

  for (let i = 1; i < addedNumbers.length; i++) {
    subtractedNumber -= addedNumbers[i];
  }

  console.log(subtractedNumber);
})