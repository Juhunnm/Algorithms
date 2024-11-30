//배열 조각하기
function solution(arr, query) {
    var answer = [];
    let arr1 =[];
    
    for(let i = 0 ;i <query.length;i++){
        if(i % 2 === 0){
            //짝수
            arr.splice(query[i]+1)
        }else{
            arr.splice(0,query[i])
        }
        console.log(query[i],arr)
    }
    return answer = arr
}

console.log(solution([0, 1, 2, 3, 4, 5, 6, 7], [4, 1, 2]))

// arr: [0, 1, 2, 3, 4, 5, 6, 7]
// query: [4, 1, 2]

// expected: [1, 2, 3]