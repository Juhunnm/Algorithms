//배열만들기 1
function solution(n, k) {
    var answer = [];
    for(let i =1;i<=n;i++){
        if(i % k ===0){
            answer.push(i);
        }
        
    }
    return answer;
}
console.log(solution(10,3))