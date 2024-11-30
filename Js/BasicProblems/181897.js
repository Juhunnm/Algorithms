//리스트 자르기
function solution(n, slicer, num_list) {
    var answer = [];
    const [a, b, c] = slicer
    if (n === 1) {
        answer = num_list.slice(0,b+1)
    } else if (n === 2) {
        answer = num_list.slice(a)
    } else if (n === 3) {
        answer = num_list.slice(a, b + 1)
    } else {
        answer = num_list.slice(a, b + 1).filter((e, i) => i % c === 0)

    }
    return answer;
}

console.log(solution(4, [1, 5, 2],[4, 5, 6, 7, 8, 9]))

// 입력값 〉 4, [1, 5, 2], [4, 5, 6, 7, 8, 9]
// 기댓값 〉 [5, 7, 9]