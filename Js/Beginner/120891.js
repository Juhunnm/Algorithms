function solution(order) {
    var answer = 0
    for(let i of String(order)){
        if(['3','6','9'].includes(i)) answer++;
    }
    return answer;
}

solution(29423)