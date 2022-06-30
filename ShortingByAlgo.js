function shorting(array) {
    debugger;
    for(let j = 0; j <= array.length -1; j++) {   // loop for minimizing extra step
        for(let i = 0; i <= (array.length - 1) - j; i++) {    // loop for shorting array from ase to dec
            if(array[i] > array[i + 1]) {    // condition for swaping element 
                let temp = array[i];
                array[i] = array[i + 1]
                array[i + 1] = temp;
            }
        }
    }
    console.log(array);
}
const arr = [5,1,89,56,41,74,2];

shorting(arr);