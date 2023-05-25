function fibs(num) {
    if (num == 1) {
        return [0];
    }else if (num == 1) {
       return [0, 1];
    }

    let fibArr = [0, 1];

    for (let i = 2; i < num; i++) {
       
       fibArr[i] = fibArr[i-2] + fibArr[i-1];
        
    }

    return fibArr;
}

console.log(fibs(100));