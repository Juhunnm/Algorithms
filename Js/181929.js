//원소들의 곱과 합
function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let mul = 1;
    //모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1 크면 0
    num_list.forEach((i,idx) => {
        sum += i;
        mul *=i;
    });
    return mul < (sum ** 2) ? 1 : 0
}

console.log(solution([5, 7, 8, 3]))