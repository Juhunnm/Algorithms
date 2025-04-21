function solution(M, N) {
    var answer = 0;

    let [max, min] = [Math.max(M, N), Math.min(M, N)]
    let num = min - 1
    if (min <= 2) num = 2

    answer = ((max - 1) * min) + (min - 1)
    console.log(answer);

    return answer
}
solution(2, 2)