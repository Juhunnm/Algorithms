function solution(quiz) {
    var answer = [];
    let n = quiz.length;
    for (let i = 0; i < n; i++) {
        let [a, b, c, d, e] = quiz[i].split(" ");

        if (b === "-") {
            answer[i] = (Number(a) - Number(c)) === Number(e) ? "O" : "X"
        } else {

            answer[i] = (Number(a) + Number(c)) === Number(e) ? "O" : "X"
        }

    }

    return answer;
}
solution(["3 - 4 = -3", "5 + 6 = 11"])