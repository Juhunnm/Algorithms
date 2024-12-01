function solution(box, n) {
    var answer = 1;
    for(let i of box){
        answer *= Math.floor(i / n)
    }
    return answer;
}

console.log(solution([10, 8, 6],3))