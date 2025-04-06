let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0].trim());
let index = 1;

while (T-- > 0) {
  let N = Number(input[index].trim());
  let students = new Array();

  for (let i = 0; i < N; i++) {
    index++;

    // A는 서류 성적 B는 면접 성적
    let student = input[index].split(' ').map(Number);
    students.push(student);
  }

  students.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let minValue = N + 1;


  for (let student of students) {
    if (student[1] < minValue) {
      minValue = student[1];
      count++;
    }
  }

  console.log(count);
  index++;
}