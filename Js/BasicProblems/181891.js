// //순서 바꾸기
// function solution(num_list, n) {
//     var answer = [];
//     for(let i =n;i<num_list.length;i++){
//         answer.push(num_list[i])
//     }
//     for(let i =0;i<n;i++){
//         answer.push(num_list[i])
//     }
//     return answer;
// }

function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list
}
//좋은 풀이
console.log(solution([2, 1, 6],1))