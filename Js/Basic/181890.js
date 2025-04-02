function solution(str_list) {
    var answer = [];
    let str1 = str_list.indexOf('l');
    let str2 = str_list.indexOf('r');
    
    // 'l'이나 'r' 둘 다 없는 경우
    if (str1 === -1 && str2 === -1) {
        return [];
    }
    
    // 'l'만 없는 경우
    if (str1 === -1) {
        answer.push(...str_list.slice(str2 + 1));
        return answer;
    }
    
    // 'r'만 없는 경우
    if (str2 === -1) {
        answer.push(...str_list.slice(0, str1));
        return answer;
    }
    
    // 'l'이 'r'보다 앞에 있는 경우
    if (str1 < str2) {
        answer.push(...str_list.slice(0, str1));
    } 
    // 'r'이 'l'보다 앞에 있는 경우
    else if (str1 > str2) {
        answer.push(...str_list.slice(str2 + 1));
    }
// function solution(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'l') return arr.slice(0, i);
//         if (arr[i] === 'r') return arr.slice(i + 1);
//     }
//     return [];
// }
    return answer;
}

//u,d,l,,r
//if l == 기준 왼쪽 else 반대

console.log(solution(["r", "u", "d", "d"]))

// test case : ["u", "u", "r", "l", "r", "r", "r", "r"]
// ans : ["l", "r", "r", "r", "r"]

// 입력값 〉 ["r", "u", "d", "d"]
// 기댓값 〉 ["u", "d", "d"]