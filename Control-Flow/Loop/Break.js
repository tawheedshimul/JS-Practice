var isRunning = true;
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1);

    if (rand === 9) {
        console.log("winner");
        break;
    } else {
        console.log("Sorry");
    }
}

console.log(rand);