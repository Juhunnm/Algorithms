function solution(arr) {
    var answer = [];
    let num1 = arr.indexOf(2); 
    let num2 = arr.lastIndexOf(2); 

    if (num1 === -1) {
        return [-1];
    }
    answer = arr.slice(num1, num2 + 1);
    return answer;
}

console.log(solution([1, 1, 1]))