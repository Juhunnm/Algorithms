//홀짝 구분하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    n % 2 == 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`)
    // console.log(n%2==0 ? `${n} is even` : `${n} is odd`)
});