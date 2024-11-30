// 수 조작하기1
const solution = (n,control) => {
    [...control].forEach((i,idx)=>{
        if(i == "w"){
            n+=1;
        }else if(i == "s"){
            n-=1;
        }else if(i == "d"){
            n +=10;
        }else{
            n-= 10;
        }
    })
    return n;
}

console.log(solution(0,"wdsawsdassw"))