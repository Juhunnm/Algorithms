//수 조작하기2
const solution = (numLog) => {
    var answer = '';
    let tmp = 0;
    numLog.forEach((i, idx) => {
        if (idx ===0 ) return
        tmp = numLog[idx] - (numLog[idx - 1])
        // tmp = i[idx] - i[idx + 1]
        if (tmp === 1) {
            answer+="w"
        } else if (tmp === -1) {
            answer+="s"
        } else if (tmp === 10) {
            answer+="d"
        } else {
            answer+="a"
        }
    })
    return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]))