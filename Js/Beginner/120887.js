const solution = (i, j, k) => {
    var answer = 0;
    for (i; i <=j; i++) {
        answer += String(i).split(k).length-1;
    }
    return answer;
}
solution(1, 13, 1);