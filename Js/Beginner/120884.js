function solution(chicken) {
    var answer = 0;
    let num = chicken;

    while (num >= 1) {
        num = num / 10;
        answer+= num
    }
    
    
    return Math.floor(answer);
}
solution(100)

//1마리당 쿠폰 하나 쿠폰10장 = 치킨한마리
//100 / 10 == 10개쿠폰인데 10개쿠폰은 1마리 시킬 숭 ㅣㅆ음음