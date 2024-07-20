const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let modular = new Set();
let count = 0;

rl.on('line', (line) => {
    modular.add(Number(line) % 42);

    if(count === 9){
        rl.close();
    }

    count++;
}).on('close', () => {
    console.log(modular.size);
    process.exit();
})


