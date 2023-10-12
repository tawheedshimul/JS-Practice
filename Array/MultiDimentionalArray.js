

var arr = [
    [67, 86, 86, 95],
    [67, 80, 26, 95],
    [60, 86, 76, 95],
    [67, 56, 86, 99],
    [60, 88, 81, 95],
]

// console.log(arr[0][2])

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log((i + ":" + arr[i][j]))
    }
}