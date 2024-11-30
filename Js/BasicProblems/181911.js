//부분 문자열 이어 붙여 문자열 만들기
function solution(my_strings, parts) {
    //my_string.len == parts.len
    var answer = '';
    my_strings.forEach((e,idx) => {
        answer += e.slice(parts[idx][0],parts[idx][1]+1)
    });
    return answer;
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]))