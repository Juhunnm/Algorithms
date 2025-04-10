function solution(array, n) {
    var answer = 0;
    array.push(n);
    array.sort((a,b)=>a-b);
    console.log(array[2])
    
    return answer;
}

solution([3,10,28],20)