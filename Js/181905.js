//문자열 뒤집기
function solution(my_string, s, e) {
    var answer = '';
    let arr = [...my_string.slice(s,e+1)].reverse()
    console.log(arr)
    console.log(arr.splice(s,e+1,...arr));
    return answer;
}

console.log(solution("Progra21Sremm3",6,12))