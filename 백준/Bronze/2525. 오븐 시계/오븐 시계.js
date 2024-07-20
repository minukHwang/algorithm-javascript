const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let hour;
let minute;
let time;
let count = 0;

rl.on('line', function(line){
    if(count === 0) {
        [hour, minute] = line.split(' ').map(Number);
        count++;
    } else if(count === 1){
        time = Number(line);
        rl.close();
    }
}).on('close', function(){
    let totalMinute = hour * 60 + minute + time;
    totalMinute %= 1440;
    let finalHour = parseInt(totalMinute / 60);
    minute = totalMinute % 60;

    console.log(finalHour + " " + minute);
    process.exit();
});

