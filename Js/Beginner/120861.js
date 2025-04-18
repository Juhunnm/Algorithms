function solution(keyinput, board) {
    var answer = [0, 0];
    let xLimit = Math.floor(board[0] / 2);
    let yLimit = Math.floor(board[1] / 2);

    for (let i of keyinput) {
        switch (i) {
            case "left":
                if (answer[0] > -xLimit) answer[0]--;
                break;
            case "right":
                if (answer[0] < xLimit) answer[0]++;
                break;
            case "up":
                if (answer[1] < yLimit) answer[1]++;
                break;
            case "down":
                if (answer[1] > -yLimit) answer[1]--;
                break;
        }

    }
    return answer;
}
solution(["down", "down", "down", "down", "down"], [7,9])

//제한사항 범위의 절반의 정수값 +-까지만 갈 수 있음 x,y둘다 이때 무시하면됨됨
