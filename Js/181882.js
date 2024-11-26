//조건에 맞게 수열 변환하기 1
function solution(arr) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 == 0) {
            console.log("짝수",arr[i])
            answer.push(arr[i] / 2); 
        } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
            console.log("홀수",arr[i])
            answer.push(arr[i] * 2); 
        } else {
            console.log("null",arr[i])
            answer.push(arr[i]);  
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
