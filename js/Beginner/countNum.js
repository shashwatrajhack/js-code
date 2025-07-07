function countDigit(num){

    let count = 0;

    while(num != 0){
        let digit = num % 10;

        count = count + 1;

        num = Math.floor(num/10);
    }

    return count;
    
}

countDigit(256558888888888);