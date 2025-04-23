function solution(score) {
    var answer = [];
    let avg = score.map(([a, b]) => ((a + b) / 2))
    answer = avg.map((v) => [...avg].sort((a, b) => b - a).indexOf(v) + 1)

    return answer;
}
solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]])