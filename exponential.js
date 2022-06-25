function exponential(x,y) {
    // return console.log(Math.pow(x,y));
    let result = 1;
    for(let i = 1; i <= y; i++) {
        result *= x;
    }
    return console.log(result);
}

exponential(2,3);