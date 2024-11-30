const solution = (num_list, n) => {
    let answer = [];
    let len = num_list.length / n
    for (let i = 0; i < len; i++) {
        let subAry = [];
        for (let j = 0; j < n; j++) {
            subAry.push(num_list[i * n + j])
        }
        answer.push(subAry)
    }
    console.log(len)
    return answer
    //0 * 3 +1 = 1, 0 * 3 + 2 = 2 ..3
    //1 * 3 + 1 = 4
}
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3))