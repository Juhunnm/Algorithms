//세로 읽기
function solution(my_string, m, c) {
    var answer = [...my_string];
    let arr = [];
    for (let i = 0; i < my_string.length / m; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i].push(answer[i * m + j]);
        }
    }
    answer = arr.map((i, idx) => i[c - 1]).join('')
    return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2))
//len 20

// [
//     [i,h,t,h], i =0 j =0
//     [b,a,k,r], i= 1 j =
//     [f,p,n,d],
//     [o,p,l,j],
//     [h,y,g,c]
// ]

// [
//     'i', 'h', 'r', 'h', 'b', // 0 ~ 3 , 4(0(i) * 4(m) +0(j) ) 5(0 * 4 + 1) ~ 7 , 8 ~ 11
//     'a', 'k', 'r', 'f', 'p',
//     'n', 'd', 'o', 'p', 'l',
//     'j', 'h', 'y', 'g', 'c'
//   ]