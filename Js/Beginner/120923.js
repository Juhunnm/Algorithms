function solution(num, total) {
    var answer = [];
    let start = (total - (num * (num - 1)) / 2) / num
    console.log(start);

    for (let i = 0; i< num; i++) {
        answer.push(start+i)

    }

    return answer
}


solution(5, 5);

//(total-(num(num-1)) /2) / 3