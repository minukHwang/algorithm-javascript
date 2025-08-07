let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let N = Number(input);

let arr = [];
for (let i = 1; i <= N; i++) arr.push(i);
let visited = Array(N).fill(false);
let selected = [];

let answer = '';
function dfs(depth) {
  if (depth === N) {
    for (x of selected) answer += x + ' ';
    answer += '\n';

    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer);