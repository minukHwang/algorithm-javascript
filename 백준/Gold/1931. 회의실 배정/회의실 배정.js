let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(line => line.trim().split(' ').map(Number));

let totalCount = input.shift()[0];
let times = input.sort((a, b) => {
    if(a[1] === b[1]){
        return a[0] - b[0];
     }
     return a[1] - b[1]
});
let maxCount = 0;
let currentEndTime = 0;

for(let i = 0; i < totalCount; i++){
    if(times[i][0] >= currentEndTime){
        maxCount++;
        currentEndTime = times[i][1];
    }
}

console.log(maxCount);