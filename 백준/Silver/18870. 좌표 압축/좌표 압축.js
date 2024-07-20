const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let coords;
let ln = 0;
let answer;

const compare = (a, b) => {
    return a.num - b.num;
}

rl.on('line', (line) => {
    if(ln === 0) {
        N = Number(line);
        ln++;
    } else {
        coords = line.split(' ').map((item, index) => {
            return {idx: index, num: Number(item)}
        });
        rl.close();
    }
}).on('close', () => {
    answer = new Array(N);
    coords.sort(compare);

    answer[coords[0].idx] = 0;
    let count = 0;

    for(let i = 1; i < N; i++){
        if(coords[i].num !== coords[i - 1].num){
            count++;
        }
        answer[coords[i].idx] = count;
    }

    console.log(...answer);
})