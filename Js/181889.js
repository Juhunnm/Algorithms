function solution(num_list, n) {
    var answer = [];
    answer.push(...num_list.splice(0,n))
    return answer;
}

console.log(solution([2, 1, 6],1))