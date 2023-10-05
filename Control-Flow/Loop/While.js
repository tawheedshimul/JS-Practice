// if conditon full fill while loop running , if condition not fullfill while loop stop 

// var i = 0
// while( i<10){
//     console.log("Tawheed")
//     i++;
// }



var isRunning = true;
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1);

    if (rand === 9) {
        console.log("winner");
        isRunning = false;
    } else {
        console.log("Sorry");
    }
}

console.log(rand);