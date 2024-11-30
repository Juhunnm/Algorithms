//접두사인지 확인하기
function solution(my_string, is_prefix) {
    let num =[];
    
    // num.push(my_string.slice(0,is_prefix.length))
    for(let i =0 ;i< my_string.length;i++){
        num.push(my_string.slice(0,i+1))
        console.log(num)
    }
    
    return num.includes(is_prefix) ? 1 : 0
}

console.log(solution("banana","nan"))