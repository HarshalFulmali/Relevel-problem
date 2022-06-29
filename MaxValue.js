let numArray = [12, 31, 10, 24, 35]; 
let maxValue = numArray[0];
for (let i = 1; i <= numArray.length - 1; i++) {
    if(numArray[i] > maxValue) {
        maxValue = numArray[i];
    }
}
console.log(maxValue);