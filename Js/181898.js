//가까운 1 찾기
function solution(arr, idx) {
    let answer = -1; 
    for (let i = idx; i < arr.length; i++) { 
        if (arr[i] === 1) {
            answer = i;
            break;
        }
    }
    return answer;
}

console.log(solution([1, 1, 1, 1, 0], 3));
