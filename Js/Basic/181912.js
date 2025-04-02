// 배열 만들기 5
function solution(intStrs, k, s, l) {
    //s,l,k

    var answer = [];
    intStrs.forEach(e => {
        let arr = parseInt(e.slice(s, s + l))
        if (arr > k) {
            answer.push(arr)
        }
    });
    return answer;
}

console.log(solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5))