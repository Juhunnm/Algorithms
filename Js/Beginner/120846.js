function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let div = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) div++;
        }
        if (div >= 3) {
            answer++;
        }
    }
    console.log(answer)
    return answer;
}

solution(15)