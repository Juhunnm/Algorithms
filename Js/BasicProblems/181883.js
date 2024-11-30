//수열과 구간 쿼리 1
function solution(arr, queries) {
    var answer = [];
    for([s,e] of queries){
        for(let i= s;i<e+1;i++){
            arr[i]+=1
        }
    }
    return arr;
}

console.log(solution([0, 1, 2, 3, 4],[[0, 1],[1, 2],[2, 3]]))