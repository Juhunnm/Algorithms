function solution(str_list) {
    var answer = [];
    let str1 = str_list.indexOf('l');
    let str2 = str_list.indexOf("r")
    console.log(str1,str2)
    
    if(str1 == 0 || str2 == str_list.length){
        return []
    }
    
    if(str1 < str2){//first l
        answer.push(...str_list.slice(0,str1));
    }else if (str1 > str2){
        answer.push(...str_list.slice(str2+1))
    }else{
        return []
    }
    return answer;
}
//u,d,l,,r
//if l == 기준 왼쪽 else 반대

console.log(solution(["r", "u", "d", "d"]))

// test case : ["u", "u", "r", "l", "r", "r", "r", "r"]
// ans : ["l", "r", "r", "r", "r"]

// 입력값 〉 ["r", "u", "d", "d"]
// 기댓값 〉 ["u", "d", "d"]