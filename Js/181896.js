//첫번째로 나오는 음수
const solution = (num_list) => {
    var answer = 0;
    
    return answer = num_list.findIndex(e => e < 0)
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]))