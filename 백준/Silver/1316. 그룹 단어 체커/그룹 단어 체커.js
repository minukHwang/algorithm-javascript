const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let words = [];
let lineCount = 0;

rl.on('line', (line) => {
    if(lineCount === 0){
        N = Number(line);
        lineCount++;
    } else {
        words.push(line);

        if(lineCount === N) {
            rl.close();
        }

        lineCount++;
    }
}).on('close', () => {
    let count = 0;

    words.forEach((word) => {
        let letterArr = [];
        let letterSet = new Set();
        letterArr.push(word.charAt(0));
        letterSet.add(word.charAt(0));

        for(let i = 1; i < word.length; i++){
            let letter = word.charAt(i);
            if(letter === word.charAt(i-1)) continue;

            letterArr.push(letter);
            letterSet.add(letter);
        }

        if(letterArr.length === letterSet.size){
            count++;
        }
    });

    console.log(count);
    process.exit(0);
})