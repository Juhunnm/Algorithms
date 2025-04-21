function solution(dots) {
    var answer = 0;
    let xValue = dots.map((dot) => dot[0])
    let yValue = dots.map((dot) => dot[1])

    let width = Math.max(...xValue) - Math.min(...xValue)
    let height = Math.max(...yValue) - Math.min(...yValue)

    return width * height
}
solution([[1, 1], [2, 1], [2, 2], [1, 2]])