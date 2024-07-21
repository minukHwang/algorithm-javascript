const rl = require('readline').createInterface(({
    input: process.stdin,
    output: process.stdout,
}));

let N;
let people = [];
let ln = 0;
let answer = '';

const compare = (a, b) => {
    if(a.age === b.age) return a.idx - b.idx;

    return a.age - b.age;
}

rl.on('line', (line) => {
    if(ln === 0) {
        N = Number(line);
        ln++;
    } else {
        const input = line.split(' ');
        const person = {idx: ln, age: Number(input[0]), name: input[1]};
        people.push(person);

        if(ln === N) rl.close();
        ln++;
    }
}).on('close', () => {
    people.sort(compare);

    people.forEach((person) => {
        answer += `${person.age} ${person.name}\n`;
    })

    console.log(answer);
    process.exit(0);
})