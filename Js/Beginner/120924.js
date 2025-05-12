function solution(common) {
    const len = common.length -1
    const last = common[len]
    const diff = common[1] - common[0]
    const ratio = common[1] / common[0];

    return common[1] - common[0] === common[len] - common[len - 1]
        ? last + diff
        : last * ratio
        
}
solution([2, 4, 8]);