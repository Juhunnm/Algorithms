function solution(id_pw, db) {
    let user =  db.find((e) => e[0] === id_pw[0])

    if(!user){
        return "fail"
    }else if(user[1] === id_pw[1]){
        return "login"
    }else{
        return "wrong pw"
    }}
//아이디 비교 -> 비번 비교 -> 틀리면 wrong pw 아이디부터 틀리면 fail
solution(["meosseugi", "1234"],[["rardss", "123"], ["yyoom", "1234"], ["123", "1234"]])