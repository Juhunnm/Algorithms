function solution(arr) {
    let answer = [...arr];
    let preAnswer = [];
    let iterations = 0;

    while (true) {
        preAnswer = [...answer]; 
        answer = answer.map((e) => {
            if (e >= 50 && e % 2 === 0) {
                return e / 2;
            } else if (e < 50 && e % 2 !== 0) {
                return e * 2 + 1;
            } else {
                return e; 
            }
        });

        iterations++; 
        if (preAnswer.every((value, index) => value === answer[index])) {
            break;
        }
    }
    return iterations -1 ;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
