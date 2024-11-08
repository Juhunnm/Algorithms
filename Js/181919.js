//콜라츠 수열 만들기
function solution(n) {
    var answer = [n];
    //x값이 짝수일떄는 2로 나누고,x가 홀수일때는 3 * x + 1로 바꾸는 계산을 반속
    //하면 x가 1이 되는지 붇는 문제를 콜라츠 문제
    while(n != 1){
        n = n %2 === 0 ? n / 2 : 3 * n +1
        answer.push(n)
    }
    return answer;
}
console.log(solution(10));