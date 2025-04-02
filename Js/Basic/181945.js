//문자열 돌리기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close',function(){
    input.map((item)=>console.log(item))
});