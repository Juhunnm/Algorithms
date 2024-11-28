//배열 만들기
const solution = (l, r) => {
    var answer = [];

    for (let i = l; i <= r; i++) {
        let str = i.toString();
        if([...str].every((v)=>v ==="5" || v==="0")){
            answer.push(i)
        }
    }
    return answer.length > 0 ? answer : [-1];
}

console.log(solution(10,20));
