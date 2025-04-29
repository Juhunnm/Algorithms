function solution(lines) {
    var answer = new Array(201).fill(0);

    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            answer[i + 100]++
        }
    });
    return answer.filter((v) => v >= 2).length
}
solution([[0, 2], [-3, -1], [-2, 1]])