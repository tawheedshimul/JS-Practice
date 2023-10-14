

function test() {
    // console.log(arguments)

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

test(10, 20, 40)



// arguments sum 
function addALL() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }

    return sum;
}

const a = addALL(3, 5, 6, 7, 7, 8, 8, 98, 89, 4, 5, 3, 3, 3,);
console.log(a)