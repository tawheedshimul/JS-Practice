// var arr = [4, 5, 46, 7, 3, 67, 7, 8, 3, 7, 4];
// var find = 5;

// var found = false; // A flag to track whether the element is found

// for (var i = 0; i < arr.length; i++) {
//     if (find === arr[i]) {
//         console.log("Yes, " + find + " found at index " + i);
//         found = true; // Set the flag to true
//         break; // Exit the loop once the element is found
//     }
// }

// if (!found) {
//     console.log("No, " + find + " not found in the array");
// }

var arr = [4, 5, 46, 7, 3, 67, 7, 8, 3, 7, 4];
var find = 7;

var foundIndices = []; // An array to store the indices of found elements

for (var i = 0; i < arr.length; i++) {
    if (find === arr[i]) {
        foundIndices.push(i); // Add the index to the foundIndices array
    }
}

if (foundIndices.length > 0) {
    console.log(find + " found at indices: " + foundIndices.join(", "));
} else {
    console.log(find + " not found in the array");
}


