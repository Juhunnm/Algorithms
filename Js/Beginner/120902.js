function solution(my_string) {
    let answer = 0;
    let ary = [...my_string.split(" ")];
    let result = Number(ary[0]);
    for (let i = 1; i < ary.length; i += 2) {
        answer = ary[i] === "+" ? result += Number(ary[i + 1]) :
            result -= Number(ary[i + 1])
    }
    return answer
}

solution("1 + 2 + 3 - 4")