//글자 이어 붙여 문자열 만들기
function solution(my_sytring,index_list){
    var answer = '';
    for(i of index_list){
        answer+=my_sytring[i]
    }
    return answer
}

console.log(solution("cvsgiorszzzmrpaqpe",[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]))