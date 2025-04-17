function solution(sides) {
    sides.sort((a, b) => a - b)
    // console.log(sides)
    var answer = 0;
    let num1 = sides[1] - sides[0];
    for (let i = num1; i < sides[1]; i++) {
        answer++;//4,5,6

        console.log("1", answer, ":", i)
    }
    for (let i = sides[1]; i < sides[0] + sides[1]; i++) {
        answer++;//7,8(6은 제외)

        console.log("2", answer, ":", i)
    }
    console.log(answer)
    return answer-1;
}

solution([11, 7])

// [1]이 클때에는 [0]값에다가 +1 부터 더하고 결과값이[1]보다 작을때까지지

// 나머지가 가장 클떄에는 [0] + [1] > [1]++ 
