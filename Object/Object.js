// var point = {
//     x:10,
//     y:20
// }

// // point.y = 30 ;

// point.z = 30;
// console.log(point)


// //2nd create object

// var obj = Object()
// obj.a = 20

// console.log(obj)


// var obj2 = new Object()
// obj2 =50

// console.log(obj2)


var point = {
    x: 30,
    y: 50,
    z: 60
}


// dot notation 
console.log(point.z)   //output 60
console.log(point.x + point.z);

// array notation 
console.log(point["x"])

point['y'] = 100
console.log(point.y)  //output 100