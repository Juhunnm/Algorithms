const solution = (numbers) => {
    var answer = 0
    numbers.sort((a,b)=> a-b);
    let len = numbers.length
    answer = Math.max(numbers[len -1] * numbers[len -2], numbers[0] * numbers[1]);
    return answer;
}


solution([3, 2, -3, 4, -5])