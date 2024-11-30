//수열과 구간 쿼리4
const solution = (arr, queries) => {
    var answer = [...arr];
    console.log(queries.length)
    for (const [s, e, k] of queries) {
        for (let i = s; i <= e; i++) {
            if(i % k ===0){
                answer[i] +=1 ;
            }
        }
    }
    return answer
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1], [0, 3, 2], [0, 3, 3]]))
//  0  1  2  3  4
// [0, 1, 2, 4, 3]
// [1, 2, 3, 5, 4]//1 모든
// [2, 2, 4, 5, 4]//2 0,2
// [3, 2, 4, 6, 4]//3 0,3