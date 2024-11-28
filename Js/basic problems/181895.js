//배열 만들기 3
function solution(arr, intervals) {
    var answer = [];
    let [[a1, b1], [a2, b2]] = intervals;
    answer.push(...arr.slice(a1,b1+1));
    answer.push(...arr.slice(a2,b2+1));
    return answer;
}

console.log(solution([1, 2, 3, 4, 5], [[1, 3], [0, 4]]));

// [[a1, b1], [a2, b2]]