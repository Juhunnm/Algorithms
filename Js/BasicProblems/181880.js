const soultion = (num_list) => {
    let answer = 0;
    for (let i of num_list) {
        while(i>1){
            i = i%2 === 0 ? i/2 : (i-1)/2;
            answer +=1;
        }
    }
}

soultion([12, 4, 15, 1, 14]);