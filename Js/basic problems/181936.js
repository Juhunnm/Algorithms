//공배수
// 두 개 이상의 자연수의 공통인 배수를 말한다. 
// 예를 들어 3과 4의 공배수는 3의 배수이기도 하고 4의 배수이기도 한 수이다.
//  두 수의 공배수 중에서 가장 작은 수를 최소공배수라고 하는데, 두개이상의 모든 공배수는 최소공배수의 배수이다.
function solution(number, n, m) {
    var answer = number % n == 0 && number % m == 0 ? 1 : 0;
    return answer;
}

console.log(solution(55,2,3))