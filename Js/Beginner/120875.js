function solution(dots) {

    const slope = (dots1, dots2) => {
        return (dots1[0] - dots2[0]) / (dots1[1] - dots2[1])
    }

    if (slope(dots[0], dots[1]) === slope(dots[2], dots[3])) return 1
    if (slope(dots[0], dots[2]) === slope(dots[1], dots[3])) return 1
    if (slope(dots[0], dots[3]) === slope(dots[1], dots[2])) return 1
    return 0;
}

console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]]))
//기울기 구하기 (x1,y1)(x2.y2) = (x1-x2) / (y1 - y2)
//0 1 2 3
//0 2 1 3
//0 3 1 2














// function solution(dots) {
//     // 기울기 구하는 함수
//     const getSlope = (dot1, dot2) => {
//         return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
//     };

//     // 가능한 조합 3가지 체크
//     if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;
//     if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;
//     if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;

//     // 모두 다르면
//     return 0;
// }
