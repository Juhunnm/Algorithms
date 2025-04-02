const solution = (n) => {
    // Math.sqrt
    return (n ** 0.5) % 1 === 0 ? 1 : 2;
}

console.log(solution(144))