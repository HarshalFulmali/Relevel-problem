function negAtLast(arr) {
    const posArr = [];      // for storing +ve element
    const negArr = [];      // for storing -ve element

    for(let i = 0; i <= arr.length - 1; i++) {  // for loop for iteration 
        if(arr[i] > 0) posArr.push(arr[i]);     // if element is +ve than push in posArr
        else negArr.push(arr[i]);               // if element is -ve than push in negArr
    }
    return posArr.concat(negArr);               // join posArr and negArr
}
const array = [-5,3,-4,88,-9,-10,21,5,6]
console.log(negAtLast(array));