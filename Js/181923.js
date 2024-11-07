//수열과 구간 쿼리 2
const solution = (arr, queries) => {
    var answer = [];
    for (let i = 0; i < queries.length; i++) {
        // console.log("fist")
        let start = queries[i][0];
        let end = queries[i][1];
        let k = queries[i][2];
        let tmp = [];

        for (let j = start; j <= end; j++) {
            if (arr[j] > k){
                tmp.push(arr[j]);
            }
        }
        if(tmp.length > 0){
            answer.push(Math.min(...tmp));
        }else{
            answer.push(-1);
        }
    }
    return answer;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]]))