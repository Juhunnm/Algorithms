//9로 나눈 나머지
function solution(number) {
    var answer = 0;
    // let num3 =[...number].map(Number).reduce((a,num)=>a+num,0)
    let num1 =0;
    [...number].map(i=>num1+=Number(i))
    return answer = num1 % 9
    
}

console.log(solution("123"))