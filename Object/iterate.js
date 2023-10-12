var obj = {
    x: 40,
    y: 60,
    z: 75
}


// in operator 
console.log("x" in obj)
console.log("f" in obj)

// for in loop 
for (var i in obj) {
    // console.log(i)
    // console.log(obj[i])
    console.log( i + ":" + obj[i])
}