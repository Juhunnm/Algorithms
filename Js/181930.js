//주사위 게임2
function solution(a, b, c) {
    var answer = 0;
    if(a == b && b== c){
        answer += (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 )
        
    }else if(a==b || a==c || b == c){
        answer += (a + b + c) * (a**2 + b**2 + c**2 )
    }else{
        answer+= a+b+c;
    }
    //세 숫자가 모두 다른 경우 더하기
    //세 숫자중 두숫자가 같은 경우 (a + b + c) × (a**2 + b**2 + c**2 )
    //세 숫자가 모두 같은 경우 (a + b + c) × (a**2 + b**2 + c**2 ) × (a**3 + b**3 + c**3 )
    return answer;
}

console.log(solution(5,3,3))