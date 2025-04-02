//대소문자 바꿔서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let tmp = "";
rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    str = input[0];

    for (let i = 0; i < str.length; i++) {
        tmp += str[i] === str[i].toUpperCase() ? str[i] = str[i].toLowerCase() : str[i] = str[i].toUpperCase();
    }
    console.log(tmp);

});

// 입출력 예
// 입력 #1

// aBcDeFg
// 출력 #1

// AbCdEfG