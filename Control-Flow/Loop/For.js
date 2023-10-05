const number = [2, 5, 7, 9, 20]

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
        console.log("even", number[i])
    }
    else{
        console.log("odd", number[i]);
    }
}

// for (let i= 0 ; i < 100; i++){
//     if (i%2==0){
//         console.log("true")
//     }
//     else{
//         console.log("first")
//     }
// }

// let sum = 0; // Initialize the sum variable outside the loop
// for (let i = 0; i < 10; i++) {
//   sum = sum + i; // Update the outer sum variable
// }

// console.log(sum);

// let sum = 0; // Initialize the sum variable outside the loop
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) { // Check if i is even
//     sum = sum + i; // Update the sum variable with even numbers only
//   }
// }

// console.log(sum);
