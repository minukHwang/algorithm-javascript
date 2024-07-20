const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let coords = [];
let lineCount = 0;
let answer = '';

const compare = (a, b) => {
    if(a.x === b.x) return a.y - b.y;
    return a.x - b.x;
}

rl.on('line', (line) => {
    if(lineCount === 0){
        N = Number(line);
        lineCount++;
    } else {
        const[x, y] = line.split(' ').map(Number);
        coords.push({x, y});

        if(lineCount === N) rl.close();

        lineCount++;
    }
}).on('close', () => {
    coords.sort(compare);

    coords.forEach((coord) => {
        answer += `${coord.x} ${coord.y}\n`;
    })

    console.log(answer);
})