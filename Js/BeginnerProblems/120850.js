const solution = (my_string) => {
    let answer = [];
    [...my_string].forEach((e, i, ary) => {
        if (e.charCodeAt() >= 48 && e.charCodeAt() <= 57){
            answer.push(Number(e));
        }
        
    });
    return (answer.sort((a,b)=>a-b));
}

console.log(solution("hi12392"))

// 소문자(a~z) 97 ~ 122
// 숫자(0~9) 48 ~ 57
// charCodeAt() 문자의 아스키 번호를 반환
