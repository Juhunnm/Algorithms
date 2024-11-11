//문자열의 뒤의 n글자
function solution(my_string, n) {
    var answer = '';
    let s = my_string.length-n;
    return answer = my_string.slice(s)
}

console.log(solution("ProgrammerS123",11))