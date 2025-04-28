function solution(A, B) {
    console.log((B+B).indexOf(A));

    
    if (A === B) return 0

    let char = A.split("")
    let len = char.length

    for (let i = 1; i <= len; i++) {
        let last = char.pop();
        char.unshift(last);

        if (char.join("") === B) {
            return i
        }
    }
    return -1
}

solution("hello", "ohell")
//sort olleh
//  h e l l o