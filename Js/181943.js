//문자열 겹쳐 쓰기
const solution = (my_string,overwrite_string,s) =>{
    // var answer = my_string.substring(s,overwrite_string.length+1);
    var answer = my_string.slice(0,s) + overwrite_string + my_string.slice(overwrite_string.length+s)
    return answer
}

// console.log(solution("He11oWor1d","lloWorl",2))

// "He11oWor1d"	"lloWorl"	2	"HelloWorld"