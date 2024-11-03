//더 크게 합치기
function solution(a, b) {
    
    // let tmpa = a.toString();
    // let tmpb = b.toString();
    // var answer = (tmpa + tmpb) >= (tmpb + tmpa) ? (tmpa + tmpb) :  (tmpb + tmpa)
    // return Number(answer);
    let answer = Math.max(`${a}${b}`,`${b}${a}`);
    return answer
}

console.log(solution(89, 8))

// 입출력 예 #1

// a ⊕ b = 991 이고, b ⊕ a = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.
// 입출력 예 #2

// a ⊕ b = 898 이고, b ⊕ a = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다.