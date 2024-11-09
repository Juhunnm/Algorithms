//주사위 게임3
function solution(a, b, c, d) {
    var answer = 0;
    // const dice = [a, b, c, d].sort((x,y)=>x-y)
    let arr = [a, b, c, d].sort();

    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]) {
        answer = 1111 * arr[0];
        console.log("1")
    } else if (arr[0] === arr[1] && arr[1] === arr[2]) {
        //p3 q1
        answer = (10 * arr[2] + arr[3]) ** 2
        console.log("2 처음부터 3개가 같을때")

    } else if (arr[1] === arr[2] && arr[2] === arr[3]) {
        //q 1 p 3
        answer = (10 * arr[2] + arr[0]) ** 2
        console.log("2 뒤에서부터 3개가 같을때")
    } else if (arr[0] === arr[1] && arr[2] === arr[3]) {
        //두쌍이 같을때
        answer = (arr[1] + arr[2]) * Math.abs(arr[1] - arr[2])
        console.log("3 두쌍이 같을때")
    } else if (arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[3]) {
        if (arr[0] === arr[1]) {
            answer = arr[2] * arr[3];
        } else if (arr[1] === arr[2]) {
            answer = arr[0] * arr[3];
        } else {
            answer = arr[0] * arr[1];
        }
    }else {
        answer = arr[0];
        console.log("5")
    }

    return answer;
}

console.log(solution(4,1,4,4))