//이어 붙인 수
const solution = (num_list) => {
    let odd = "", even = "";
    let test = num_list[0].push
    test = num_list[1].push
    console.log(test)
    num_list.forEach((i, idx) => {
        i % 2 == 0 ? even += i.toString() : odd += i.toString();
    });
    return Number(odd) + Number(even)
    

}

console.log(solution([3, 4, 5, 2, 1]))