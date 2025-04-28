function solution(babbling) {
    let word = ["aya", "ye", "woo", "ma"]
    var answer = 0;

    for(let i =0 ;i<babbling.length;i++){
        let temp = babbling[i];
        for(let j =0 ;j<word.length;j++){
            temp = temp.replace(word[j],"#")
        }
        if(temp = temp.replaceAll("#","") === "") answer++
    }
    console.log(answer);
    
    return answer;
}
solution(["aya", "yee", "u", "maa", "wyeoo","ayaxyema"])