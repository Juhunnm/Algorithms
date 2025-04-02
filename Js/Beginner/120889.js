const solution = (sides) => {
    sides.sort((a, b) => a - b);
    return (sides[0] + sides[1]) > sides[2] ? 2 : 1
}

solution([1, 2, 3]);
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.