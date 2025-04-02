const solution = (before, after) => {
    let char1 = [...before].sort().join("");
    let char2 = [...after].sort().join("");
    return char1 === char2 ? 1 : 0;
}

console.log(solution("olleh", "hello"))