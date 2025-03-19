const solution = (my_string) => {
    let answer = 0;
    [...my_string].filter((v) => !isNaN(v)).forEach(e => {
        answer+=Number(e)
    });;
    return answer
}

console.log(solution("aAb1B2cC34oOp"))
