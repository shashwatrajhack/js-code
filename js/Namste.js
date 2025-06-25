//Everything in JS happens inside the execution context.
function x(){
    for(let i = 0;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

x();

//callBack function is a function that is passed as an argument to another function and is executed after the completion of that function.
//closure is a function that has access to its own scope, the outer function's scope, and the global scope.
//callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain.

//Mark and sweep algorithm
//Mark and sweep algorithm is a garbage collection algorithm that marks all reachable objects and then sweeps away the unreachable objects.
//Inlinig is a technique used by the JavaScript engine to optimize the performance of functions by replacing the function call with the function body.
//copy elision is a technique used by the JavaScript engine to optimize the performance of objects by removing unnecessary copies of objects.
