///두 수의 연산값 비교하기
function solution(a, b) {
    var answer = Math.max(`${a}${b}`,2*a*b);
    return answer;
}

solution(2,91)