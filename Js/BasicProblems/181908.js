//접미사인지 확인하기
function solution(my_string, is_suffix) {
    var answer = 0;
    let arr =[];
    for (let i = 0; i < my_string.length; i++) {
        arr.push(my_string.slice(i, my_string.length));
    }
    if (arr.includes(is_suffix)) answer = 1;
    return answer;
}

console.log(solution("banana", "nan"))