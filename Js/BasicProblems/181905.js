//문자열 뒤집기
function solution(my_string, s, e) {
    let arr  = [...my_string];
    let reverse = arr.slice(s, e + 1).reverse();
    arr.splice(s,e-s+1,...reverse).join("")
    return arr.join("")
}

console.log(solution("Progra21Sremm3", 6, 12))