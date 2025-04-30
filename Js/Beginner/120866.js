function solution(board) {
    var answer = 0;
    const x = [-1, -1, -1, 0, 0, 1, 1, 1];
    const y = [-1, 0, 1, -1, 1, -1, 0, 1]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                let tmp = [i, j]
                for (let k = 0; k < 8; k++) {
                    let nx = i + x[k];
                    let ny = j + y
                }

            }
        }
    }
    console.log(board);


    return answer;
}
solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
])

//(3,2)x -1 ,+1 y = 자기 자신 뺴고는 -1,0,+1
//
//(2,1) ,(2,2), (2,3)
//(3,1) , X ,  (3,3)
//(4,1),(4,2),(4,3)