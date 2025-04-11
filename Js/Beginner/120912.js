function solution(array) {
    var answer = 0;
    let ary = [...array.join("")];
    for (let i of ary) {
        if (i === "7") {
            answer++;
        }
    }

    return answer;
}
///split("7")

solution([7, 77, 17])