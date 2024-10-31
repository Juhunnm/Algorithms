// 문자열 반복해서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    for (let i = 0; i < n; i++) {
        // console.log(str); // 줄바꿈때문에 출력이 안됨 // 문장 먼저 합친뒤 콘솔로 실행하면 가능함
        process.stdout.write(str); // 줄바꿈 없이 출력 할 수 있음
        //str.repeat(n) 하면 문자열 반복 할 수 있음;
    }
});

// 입출력 예
// 입력 #1
// string 5

// 출력 #1
// stringstringstringstringstring