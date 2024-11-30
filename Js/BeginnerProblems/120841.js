const solution = (dot) =>{
    let answer = [];
    const [x,y] = dot;
    if(0<x && 0 <y){
        answer = 1;
    }else if (0 < x && 0> y){
        answer = 4;
    }else if(0> x && 0 > y){
        answer = 3;
    }else{
        answer = 2
    }
    return answer
}

console.log(solution([-7, 4]))