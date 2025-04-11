function solution(array, n) {
    var answer = [];
    return array.reduce((acc,cur) => {
        let accDiff = Math.abs(acc-n);
        let curDiff = Math.abs(cur-n);

        if(curDiff < accDiff || (curDiff === accDiff && cur < acc)){
            return cur
        }else{
            return acc
        }

    })
}