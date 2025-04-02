const solution = (numbers, direction) => {
    let answer = [];
    if (direction === "right") {
        answer.push(...numbers.splice(numbers.length - 1));
        answer.push(...numbers)

    } else {
        answer.push(...numbers.splice(1,numbers.length-1));
        answer.push(...numbers)
    }
    return answer;
}
console.log(solution([1, 2, 3], "left"))