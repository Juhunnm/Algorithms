function factorial(num){
    if(num === 1 || num === 0){
        return 1;
    }
    return num * factorial(num - 1)
}
function solution(balls,share) {
    var answer =0;
    answer = Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
    return answer
}

//6 / 1 * 2

console.log(solution(30, 15))
