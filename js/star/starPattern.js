// Solid Square
// let n = 5;
// for(let i = 0;i<n;i++){
//     let star = "";
//     for(let j = 0;j<n;j++){
//         star = star + "*";
//     }
//     console.log(star);
// }

//hollow square
// let n = 4;
// for(let i = 0;i<n;i++){
//     let star = "";
//     for(let j = 0;j<n;j++){
//         if(i==0||i==n-1||j==0||j==n-1){
//             star = star + "*";
//         }else{
//             star = star + " ";
//         }
//     }
//     console.log(star);
// }

// Left-Aligned Triangl

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let star = "";
//     for (let j = 0; j <= i; j++) {
//       star = star + "*";
//     }
//     console.log(star);
// }

//Inverted left triangle
// let n = 5;
// for(let i = 0;i<n;i++){
//     let str = "";
//     for(let j = n-i;j>0;j--){
//         str = str + "*";
//     }
//     console.log(str);
// }

//Right-Aligned Triangle

// let n = 5;

// for(let i = 0;i<n;i++){
//     let star = "";
//     for(let j =0;j<n-i-1;j++){
//         star = star + " "
//     }
//     for(let k = 0;k<=i;k++){
//         star = star + "*"
//     }
//     console.log(star);
// }

//6️⃣ Inverted Right-Triangle

// let n = 5;
// for(let i = 0;i<n;i++){
//     let star = "";
//     for(let k = 0;k<i;k++){
//         star = star + " ";
//     }
//     for(let j=0;j<n-i;j++){
//         star = star + "*";
//     }
//     console.log(star);
// }

//Pyramid

// let n = 5;

// for(let i = 0;i<n;i++){
//     let str = "";
//     for(let j = n-i-1;j>0;j--){
//         str = str + " ";
//     }
//     for(let k = 0;k<(2*i+1);k++){
//         str = str + "*"

//     }
//     console.log(str);
// }

//8️⃣ Inverted Pyramid

// let n = 5;
// for(let i = 0;i<n;i++){
//     let str = "";
//     for(let j = 0;j<=i;j++){
//         str = str + " ";
//     }
//     for(let k = 2*n -(2*i+1);k>0;k--){
//         str = str + "*";
//     }
//     console.log(str);
// }

// let n = 5;
// for(let i = 0;i<n;i++){
// let str = "";
//     for(let j = n-i-1;j>0;j--){
//         str = str + " ";
//     }
//     for(let k = 0;k<(2*i+1);k++){
//         str = str + "*"

//     }

//     console.log(str);
// }
// for(let i = 0;i<n;i++){
//     let str1 = "";
//     for(let j = 0;j<i;j++){
//         str1 = str1 + " ";
//     }
//     for(let k = 2*n -(2*i+1);k>0;k--){
//         str1 = str1 + "*";
//     }
//     console.log(str1);

// }

//11️⃣ Hollow Triangle

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let star = "";
//     for (let j = 0; j <= i; j++) {
//         if(j==i||j == 0 || i == n-1){
//             star = star + "*";

//         }
//         else{
//             star = star + " ";
//         }

//     }
//     console.log(star);
// }

//12️⃣ Reverse Hollow Triangle

// let n = 5;
// for(let i = 0;i<n;i++){
//     let star = "";
//     for(let j = 0;j<i;j++){
//         star = star + " ";
//     }
//     for(let k = 0;k<n-i;k++){

//         if (k === 0 || k === n - i - 1 || i === 0) {
//             star += "*";
//         } else {
//             star += " ";
//         }
//     }
//     console.log(star);
// }

//13️⃣ Hourglass

//14️⃣ Cross (X Pattern)
// let n = 5;
// for(let i = 0;i<n;i++){
//     let star = "";
//     for(let j = 0;j<n;j++){
      
//         if(j === i || j === n -i-1){
//             star = star +"*";
//         }else{
//             star = star+" ";
//         }
//     }
//     console.log(star);
// }

//15️⃣ Plus Pattern
// let n = 5;
// let middle = Math.floor(n/2);
// for(let i = 0;i<n;i++){
//     let str = "";
//     for(let j = 0;j<n;j++){
//         if(j === middle || i === middle){
//             str = str + "*";
//         }else{
//             str = str + " ";
//         }
//     }
//     console.log(str);
// }

//16️⃣ Zig-Zag Pattern
// let n = 9;  // total number of columns (width)

// for (let row = 1; row <= 3; row++) {
//     let str = "";

//     for (let col = 1; col <= n; col++) {
//         if (
//             // Zig-zag logic
//             (row + col) % 4 === 0 || 
//             (row === 2 && col % 4 === 0)
//         ) {
//             str += "*";
//         } else {
//             str += " ";
//         }
//     }

//     console.log(str);
// }

//17️⃣ Number Pyramid

// let n = 5;
// for(let i = 1;i<=n;i++){
//     str = ""
//     for(let j = 0;j<i;j++){
//         str = str + i;
//     }
//     console.log(str);
// }

//19️⃣ Pascal-like Star Triangle

// let n = 5;
// let middle = Math.floor(n/2);

// for(let i = 0;i<n;i++){
//     let str = "";
//     for(let j = 0;j<n-i-1;j++){
//         str = str+" ";
//     }
//     for(let k = 0;k<=i;k++){
//         str = str + "* ";
//     }
//     console.log(str);
// }

//20️⃣ Hollow Pyramid

//18️⃣ Butterfly Pattern

// let n = 5;

// for (let i = 1; i <= 2 * n - 1; i++) {
//     let stars = "";
//     if (i < n) {
//         for (let j = 1; j <= i; j++) {
//             stars = stars + "*";
//         }

//     } else {
//         for (let k = 1; k <= 2 * n - i; k++) {
//             stars = stars + "*"
//         }

//     }
//     console.log(stars);
// }

// for (let i = 1; i <= 2 * n - 1; i++) {
//     let str = "";

//     if (i < n) {
//         for (let k = n - i; k >= 1; k--) {
//             str = str + "*";
//         }
//     } else {
//         for (let j = 1; j < 2 * n - i; j++) {
//             str = str + "*";
//         }
//     }
//     console.log(str);
// }

