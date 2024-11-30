//n번째 원소부터 
function solution(num_list, n) {
    var answer = [];
    console.log(num_list,n)
    console.log(num_list.length)
    for(let i =n-1;i<num_list.length;i++){
        answer.push(num_list[i])
    }
    return answer;
}
console.log(solution([5, 2, 1, 7, 5], 3))