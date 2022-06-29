// function for finding minimum value in array
function minValue(array) {
    let minValue = array[0];
    for (let i = 1; i <= array.length - 1; i++) {
        if(array[i] < minValue) {
            minValue = array[i];
        }
    }
    console.log(minValue);
}

// function for finding maximum value in array
function maxValue(array) {
    let maxValue = array[0];
    for (let i = 1; i <= array.length - 1; i++) {
        if(array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    console.log(maxValue);
}

let numArray = [10, 80, 50, 93, 8, 15];

minValue(numArray);
maxValue(numArray);