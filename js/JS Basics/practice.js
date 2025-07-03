// let num = prompt("Enter a number : ");
// console.log("The user input is", num);
// if(num % 5 ===0){
    
//     console.log("The number is divisible by 5");
// }else{
//     console.log("The number is not divisible by 5");

// }

let score = prompt("Enter your score : ");
let gradeStudent;;

if(score >80 && score<=100){
    gradeStudent = "A";
}
else if(score>70 && score<=89){
    gradeStudent = "B";
}
else if(score>60 && score<=79){
    gradeStudent = "C";
}
else if(score>50 && score<= 59){
    gradeStudent = "D";
}
else(
    gradeStudent = "F" 
)

console.log("Your grade is", gradeStudent);