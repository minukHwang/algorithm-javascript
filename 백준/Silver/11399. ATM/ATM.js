let fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

let N = Number(input[0]);
let people = input[1].split(' ').map(Number);
let answer = 0;
let time = 0;

// 정렬
people.sort((a, b) => a - b);

// 누적해서 합 구하기
for (let i = 0; i < N; i++) {
  time += people[i];
  answer += time;
}

console.log(answer);