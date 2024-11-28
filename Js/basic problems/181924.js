//수열과 구간 쿼리3
const solution = (arr, queries) => {
    for (let i = 0; i < queries.length; i++) {
        let idx1 = queries[i][0];
        let idx2 = queries[i][1];
        
        // 두 인덱스의 값을 스왑
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    // queries.forEach( ([a,b]) => {
    //     [arr[a],arr[b]] = [arr[b],arr[a]];
    // })구조분해하당 이용하기
    return arr;
}

console.log(solution([0, 1, 2, 3, 4], [[0, 3], [1, 2], [1, 4]]));
// Expected output: [3, 4, 1, 0, 2]
