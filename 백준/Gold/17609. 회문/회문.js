let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);

const palindrome = (x) => {
  return x === x.split('').reverse().join('');
}

for (let i = 1; i < T + 1; i++) {
  let word = input[i];
  if (palindrome(word)) console.log(0);
  else {
    let left = 0;
    let right = word.length - 1;
    let isDeleted = false;

    while (left <= right) {
      if (word[left] !== word[right]) {
        if (palindrome(word.slice(0, left) + word.slice(left + 1, word.length))) {
          isDeleted = true;
        }
        if (palindrome(word.slice(0, right) + word.slice(right + 1, word.length))) {
          isDeleted = true;
        }
        break;
      }

      left++;
      right--;
    }

    if (isDeleted) console.log(1);
    else console.log(2)
  }
}