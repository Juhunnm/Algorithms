function solution(board) {
    var answer = 0;
    let x = [-1, -1, -1, 0, 0, 1, 1, 1];
    let y = [-1, 0, 1, -1, 1, -1, 0, 1]
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                for (let k = 0; k < 8; k++) {

                    let col = i + x[k];
                    let row = j + y[k];
                    if (col >= 0 && col < board.length &&
                        row >= 0 && row < board[0].length
                        && board[col][row] === 0) {
                        board[col][row]=2;
                    }
                }
            }
        }
    }
    for(let i =0 ;i <board.length;i++){
        for(let j =0 ;j<board[i].length;j++){
            if(board[i][j] ===0) answer++;
        }
    }

    return answer;
}
solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
])
// //(3,2)x -1 ,+1 y = 자기 자신 뺴고는 -1,0,+1
// //
// //(2,1) ,(2,2), (2,3)
// //(3,1) , X ,  (3,3)
// //(4,1),(4,2),(4,3)