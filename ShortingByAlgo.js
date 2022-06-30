// --------------------------------------------------------
// first loop for minimizing extra step
// nested loop for shorting array from ase to dec
// then condition for swaping element a[i] > a[i+1]
// storing a[i] value in temp variable
// storing a[i + 1] value in a[i]
// storing temp value in a[i + 1]
// ---------------------------------------------------------

function shorting(array) {
    debugger;
    for(let j = 0; j <= array.length -1; j++) {   
        for(let i = 0; i <= (array.length - 1) - j; i++) {    
            if(array[i] > array[i + 1]) {    
                let temp = array[i];         
                array[i] = array[i + 1]      
                array[i + 1] = temp;         
            }
        }
    }
    console.log(array);
}
const arr = [54,23,21,15,78,10];

shorting(arr);