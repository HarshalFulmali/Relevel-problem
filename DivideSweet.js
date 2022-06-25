function sweetDivide(n) {
    if(n % 2 === 0) {
        console.log("Output : Yes");
    }
    else console.log("Output : No");
}

function verifiy(n) {
    return ( (n < 2) ? false : (n % 2 === 0) ? true : false );
}

sweetDivide(1);

console.log(( verifiy(1) ? "Yes" : "No"));