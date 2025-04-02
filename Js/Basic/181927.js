//마지막 두 원소
const solution = (num_list)=>{
    var answer = [];
    num_list.push(num_list[num_list.length-1] > num_list[num_list.length-2] ? num_list[num_list.length-1] - num_list[num_list.length-2] : num_list[num_list.length-1] * 2); 

    return num_list;
}
// function solution(num_list) {
//     const [a, b] = [...num_list].reverse();
//     return [...num_list, a > b ? (a-b):a*2];
// } 다른 사람 풀이(구조분해 할당 알아가기)
console.log(solution([2,1,6]))