//글자지우기
function solution(my_string, indices) {
    var answer = '';
    indices.sort((a,b)=>a-b);
    return answer = [...my_string].filter((_,idx)=>!indices.includes(idx)).join("")
}
console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]))
