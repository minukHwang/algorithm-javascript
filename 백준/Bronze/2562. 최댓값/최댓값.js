const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n').map(Number);

const result = input.reduce((acc, value, index) => {
    if(value > acc.maxValue){
        acc.maxValue = value;
        acc.maxIndex = index;
    }

    return acc;
}, { maxValue: -Infinity, maxIndex: -1 })


console.log(result.maxValue);
console.log(result.maxIndex + 1);