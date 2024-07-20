const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on('line', function(line){
    line.split(' ').forEach((item) => {
        input.push(Number(item));
    })
}).on('close', function(line){
    let h = input[0];
    let m = input[1];

    // 1. 45분 빼기
    m = m - 45;

    // 2. 만약에 m이 0보다 작으면 시간 조정
    if(m < 0) {
        m += 60;
        h -= 1;

        if(h < 0) h = 23;
    }

    console.log(`${h} ${m}`);
    process.exit();
})