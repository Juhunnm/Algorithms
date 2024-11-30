//n의 배수
function solution(num, n) {
    var answer = num %n == 0 ? 1 : 0; 
    return answer;
}

console.log(solution(34,3));