const solution = (n, numlist) => {
    var answer = [];
    numlist.forEach(e => {
        if (e % n === 0) answer.push(e)
    });
    console.log(answer)
    return answer;
}
solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);