let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

const countByRange = (arr, leftValue, rightValue) => {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let M = Number(input[2]);
let targets = input[3].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = ''
for (x of targets) {
  answer += countByRange(arr, x, x) + ' ';
}

console.log(answer);