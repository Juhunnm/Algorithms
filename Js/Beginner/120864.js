function solution(my_string) {
    var answer = 0;
    let temp = ''
    for (let ch of my_string) {
        if (!isNaN(ch) && ch !== ' ') {
            temp += ch;
        } else {
            if (temp.length > 0) {
                answer += Number(temp);
                temp = ''
            }
        }
    }
    if(temp.length > 0 ){
        answer+=Number(temp)
    }
    return answer;
}

solution("aAb1B2cC34oOp")