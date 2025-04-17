function solution(numbers) {
    const str = [["zero", 0], ["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9]];
    for (let i of str) {
        numbers = numbers.replaceAll(i[0], i[1])
    }
    return Number(numbers);
}
solution("onefourzerosixseven")