function fibs(num) {
    if (num <= 0) {
        return "Enter a valid number!";
    }else if (num == 1) {
        return [0];
    }else if (num == 2) {
       return [0, 1];
    }

    let fibArr = [0, 1];

    for (let i = 2; i < num; i++) {
       
       fibArr[i] = fibArr[i-2] + fibArr[i-1];
        
    }

    return fibArr;
}

console.log(fibs(8));


function fibRec(num) {
    if (num <= 0) {
        return "Enter a valid number!";
    }else if (num == 1) {
        return [0];
    }else if (num == 2) {
       return [0, 1];
    }

    let fibArr = fibRec(num - 1); 
    fibArr.push(fibArr[num - 2] + fibArr[num - 3]); 

    return fibArr;
}

console.log(fibRec(8));