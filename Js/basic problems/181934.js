//조건 문자열

const solution = (ineq, eq, n, m) => {
    var answer =0;
    if(ineq == "<"&& eq =="="){
        //<=
        answer = n <= m ? 1 : 0
    }else if(ineq ==">" && eq =="="){
        //>=
        answer = n >= m ? 1 : 0
    }else if(ineq == ">" && eq =="!"){
        //>
        answer = n > m ? 1 : 0
    }else{
        //<
        answer = n < m ? 1 : 0
    }
    return answer;
}

console.log(solution("<", "=", 60, 50))