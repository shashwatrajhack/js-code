//fibonacci series

function fibo(n){
    if (n < 0) {
        return "Fibonacci is not defined for negative numbers";
    };
    if (n === 0) {
        return 0;
    };
    if (n === 1) {
        return 1;
    };
    let a = 0, b = 1,c;

    for(let i = 2;i<=n;i++){
        c = a+b;
        a = b;
        b = c;

        console.log(c);

    }

    return c;
    
}