
function solution(n) {
    var answer = 1;
    let count = 1;

    while (answer * (count + 1) <= n) {
        count++;
        answer *= count;
    }
    
    return count
}


solution(7)