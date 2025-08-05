let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let N = input[0];
let M = input[1];

let arr = [];
for (let i = 1; i <= N; i++) arr.push(i);
let visited = Array(N).fill(false);
let selected = [];

let answer = '';
function dfs(arr, depth) {
  if (depth === M) {
    for (x of selected) answer += x + ' ';
    answer += '\n';
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(arr[i]);
      dfs(arr, depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
}

dfs(arr, 0);
console.log(answer);