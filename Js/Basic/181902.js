//문자 개수 세기
function solution(my_string) {
    var answer = Array(52).fill(0);
    let arr = [...my_string];
    
    arr.forEach((i) => {
        let charCode = i.charCodeAt();
        if (charCode >= 65 && charCode <= 90) { 
            let num = charCode - 65; 
            answer[num]++;
        } else if (charCode >= 97 && charCode <= 122) { 
            let num = charCode - 97 + 26; 
            answer[num]++;
        }
    });
    
    return answer;
}

console.log(solution("Programmers"))
// [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
//     0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 
//     0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 
//     1, 0, 0, 0, 0, 0, 0, 0
// ]

// [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1,
//     0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3,
//     1, 0, 0, 0, 0, 0, 0, 0
//   ]
  