function solution(array) {
    let answer = [];
    let max = Math.max(...array)
    let index = array.indexOf(max);
    return [answer[0],answer[1]] = [max,index]
}

console.log(solution([1, 8, 3]));