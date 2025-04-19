function solution(spell, dic) {
    var answer = [];
    let sortSpell = spell.sort().join('');
    for (let i of dic) {
        answer = (i.split('').sort().join(''))
        if(answer === sortSpell) return 1
    }
    
    return 2
}

solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]);