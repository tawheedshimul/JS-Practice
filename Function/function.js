// var date = new Date();
// date.getTime();
// console.log(date)


function addition() {
    var a = 5;
    var b = 5;
    console.log(a + b)
}
addition();


// argumeent js  
function add(a, b) {
    var a = 5;
    var b = 6;
    return a + b;
}

const sum = add(5, 6);
console.log(sum)

// lopop addition 
// var a = [3, 4, 5, 6, 7, 7]
// var b = 0;
// for (var i = 0; i < a.length; i++) {
//     b = b + a[i]
// }
// console.log(b);


var arr1=[4,6,7,8,9,2,14,6]
var arr2=[4,6,7,8,9,2,4,6]
var arr3=[4,6,7,5,9,2,4,6]


function sumOfArray(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum);


}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)