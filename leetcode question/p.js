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

setTimeout(hello,2000);//time out