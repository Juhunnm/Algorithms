//flag에 따라 값 반환하기
function solution(a, b, flag) {
    var answer = flag == true ? a + b : a - b
    return answer;
}

console.log(solution(-4,7,true));