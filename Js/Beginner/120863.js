function solution(polynomial) {
    var answer = [];
    let xSum = 0;
    let constSum = 0;


    const temp = polynomial.split(" + ");
    temp.forEach((item) => {
        if (item.includes('x')) {
            let x = item.replace('x', '')
            xSum += Number(x || 1)
        } else {
            constSum += Number(item)
        }

    })
    
    if (xSum === 1) answer.push('x')
    else if (xSum > 1){
        answer.push(`${xSum}x`)
    }
    if(constSum > 0) answer.push(`${constSum}`)
        

    return answer.join(" + ");
}
solution("x + x + x")