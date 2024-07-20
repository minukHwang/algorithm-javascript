const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let words = [];
let ln = 0;
let answer = '';

const compare = (a, b) => {
    if(a.length === b.length) {
        if(a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }

    return a.length - b.length;
}

rl.on('line', (line) => {
    if(ln === 0) {
        N = Number(line);
        ln++;
    } else {
        words.push(line);
        if(ln === N) rl.close();
        ln++;
    }
}).on('close', () => {
    words = [...new Set(words)];
    words.sort(compare);
    for(let word of words){
        answer += word + '\n';
    }
    console.log(answer);
})