//Create a simple calculator (add, subtract, multiply, divide).

function calculator(num1,num2,operator){
    switch(operator){
        case '+':
        return num1 + num2;
        break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if(num2 === 0){
                return "Cannot divide by zero";
            }   
            return num1 / num2;
            break;
        default:
            return "Invalid operator";    
    }
}

console.log(calculator(10,5,'/'));