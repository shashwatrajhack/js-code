//prototyping in javascript

const employee = {
    calcTax(){
        console.log("the tax rate is 18%");
    }
};

const ann = {
    salary:5000,
}

ann.__proto__ = employee;

//classes

class ToyotaCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop")
    }

}

let fortuner = new ToyotaCar();

function hello(){
    console.log("hello");
}

setTimeout(hello);//time out

//callback --> function called in another function is called callback;

function sum(a,b){
    console.log(a+b)
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);

}

calculator(1,4,sum)


//Promises is an object oin js which has 3 state pending,reject and resolve.

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promises");
//     //resolve("successful");
//     reject("some error occured");

// });

//how to use promises --> by using .then and .catch method;

const getPromise = () => {
    return new promise((resolve,reject) => {
        console.log("i am a promise");
        resolve("success");
    })
}

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
})