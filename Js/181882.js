//조건에 맞게 수열 변환하기 1
function solution(arr) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= 50 && i % 2 == 0) {
            answer.push(arr[i] / 2);  // i가 50 이상이고 짝수일 경우 arr[i]를 2로 나눠서 추가
        } else if (i < 50 && i % 2 !== 0) {
            answer.push(arr[i] * 2);  // i가 50 미만이고 홀수일 경우 arr[i]를 2배로 만들어서 추가
        } else {
            answer.push(arr[i]);  // 나머지 경우는 그대로 추가
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
