//qr code 
function solution(q, r, code) {
    var answer = '';
    let arr = [...code];
    arr.map((i,idx)=>{
        if(idx % q  === r) answer += i;
    })
    return answer;
}


console.log(solution(3,1,"qjnwezgrpirldywt"))