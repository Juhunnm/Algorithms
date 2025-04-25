function solution(n) {
    var answer = 0;
    let i = 1;
    for (i; i <= n; i++) {
        if (i % 3 === 0 || String(i).includes(3)) {
            n += 1;
            continue;
        }
        answer = i
    }
    return answer;
}

solution(15)