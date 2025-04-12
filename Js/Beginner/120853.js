function solution(s) {
    let answer = [];

    s.split(" ").forEach((e) => {
        if (e === "Z") {
            answer.pop();
        } else {
            answer.push(Number(e));
        }
    });
    return answer.reduce((acc,cur) => {
        return acc+cur;
    },0)
}

console.log(solution("1 2 Z 3"))