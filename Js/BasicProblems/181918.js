//배열만들기
function solution(arr) {
    var stk = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length === 0 || stk[stk.length - 1]  < arr[i]) {
            stk.push(arr[i])
            i++;
        }else if (stk[stk.length - 1] >= arr[i]) {
            stk.pop();
        }
    }
    return stk;
}

console.log(solution([1, 4, 2, 5, 3]))