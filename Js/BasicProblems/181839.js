const cal = (num1, num2) => {
    if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        return num1 ** 2 + num2 ** 2;
    } else if (num1 % 2 !== num2 % 2) {
        return 2 * (num1 + num2)
    } else return Math.abs(num1 - num2)
}
function solution(a, b) {
    var answer = cal(a, b);
    console.log(answer)
    return answer;
}
solution(3, 5)