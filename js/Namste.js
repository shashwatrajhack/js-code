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

//Promise in JS
//A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//A promise can be in one of three states: pending, fulfilled, or rejected.
//A promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function.
//The executor function takes two arguments: resolve and reject. The resolve function is called when the asynchronous operation is successful, and the reject function is called when the asynchronous operation fails.
//A promise can be consumed using the then() method, which takes two arguments: onFulfilled and onRejected. The onFulfilled function is called when the promise is fulfilled, and the onRejected function is called when the promise is rejected.
//A promise can also be consumed using the catch() method, which takes one argument: onRejected. The onRejected function is called when the promise is rejected.
//A promise can be consumed using the finally() method, which takes no arguments. The finally function is called when the promise is settled, regardless of whether it was fulfilled or rejected.
//A promise can be chained using the then() method, which returns a new promise that is resolved with the value returned by the onFulfilled function or rejected with the error thrown by the onRejected function.
//A promise can be created using the Promise.resolve() method, which returns a promise that is resolved with the given value.
//A promise can be created using the Promise.reject() method, which returns a promise that is rejected with the given reason.


const cart = ["shirt","pant","shoes"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
    //proceedToPayment(orderId);
})


function createOrder(cart){
    const pr = new Promise(function(resolve,reject){

        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject("Invalid Cart");
        }

    })
}

//Promise methods
//Promise.all() takes an array of promises and returns a new promise that is resolved when all the promises are resolved or rejected when any of the promises are rejected.
//Promise.allSettled() takes an array of promises and returns a new promise that is resolved when all the promises are settled, regardless of whether they were fulfilled or rejected.
//Promise.race() takes an array of promises and returns a new promise that is resolved when the first promise is resolved or rejected when the first promise is rejected.
//Promise.any() takes an array of promises and returns a new promise that is resolved when the first promise is fulfilled or rejected when all the promises are rejected.

const p1 = new promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 resolved"),3000);
})

const p2 = new promise((resolve,reject)=>{
    setTimeout(()=>
        resolve("p2 resolved"),1000);
})

const p3 = new promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),2000)
})

Promise.all([p1,p2,p3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})