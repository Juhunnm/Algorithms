// const solution = (my_string) => {
//     let answer = 0;
//     [...my_string].filter((v) => !isNaN(v)).forEach(e => {
//         answer+=Number(e)
//     });;
//     return answer
// }

// console.log(solution("aAb1B2cC34oOp"))
const solution = (my_string) => {
    let answer = 0;
    answer = [...my_string].filter((v) => !isNaN(v)).reduce((acc, cur) => acc + Number(cur),0)
    return answer
}

console.log(solution("aAb1B2cC34oOp"))
