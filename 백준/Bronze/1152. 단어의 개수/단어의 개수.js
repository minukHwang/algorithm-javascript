const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ');


if(input[0] === '') console.log(0);
else console.log(input.length);