let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let N = input[0];
let M = input[1];

let arr = [];
for (let i = 1; i <= N; i++) arr.push(i);
let selected = [];

let answer = '';
function dfs(depth) {
  if (depth === M) {
    for (x of selected) answer += x + ' ';
    answer += '\n';
    return;
  }

  for (let i = 0; i < N; i++) {
    selected.push(arr[i]);
    dfs(depth + 1);
    selected.pop();
  }
}

dfs(0);
console.log(answer);