//문자열 섞기
function solution(str1, str2) {
    var answer = [...str1].map((i,idx)=>{
        return i+str2[idx]
    }).join("");
    // for(let i =0;i< str1.length;i++){
    //     answer += str1[i] + str2[i];
    // }
    
    console.log(answer)
    return answer;
}

console.log(solution('aaaaa','bbbbb'))