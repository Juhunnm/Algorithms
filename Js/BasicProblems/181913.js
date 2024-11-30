//문자열 여러번 뒤집기
function solution(my_string, queries) {
    let arr = [...my_string];
    for (const [s, e] of queries) {
        let str = arr.slice(s, e + 1).reverse();

        arr.splice(s,e-s + 1,...str)
    }
    return arr.join('');
}

console.log(solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]))