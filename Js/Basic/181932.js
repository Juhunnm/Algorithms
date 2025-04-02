//코드 처리하기
function solution(code) {
    let mode = 0;     
    let ret = "";

    [...code].forEach((itm, idx) => {
        if (mode === 0) {  // mode가 0일 때
            if (itm !== "1" && idx % 2 === 0) {  
                ret += itm;
            } else if (itm === "1") {  
                mode = 1;
            }
        } else {  // mode가 1일 때
            if (itm !== "1" && idx % 2 !== 0) {  
                ret += itm;
            } else if (itm === "1") { 
                mode = 0;
            }
        }
    });
    return ret === "" ? "EMPTY" : ret;
}

console.log(solution('abc1abc1abc')); // 예상 출력: "acac"
