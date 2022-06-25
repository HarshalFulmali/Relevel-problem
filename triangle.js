function checkTriangle(a,b,c) {
    return ( (a + b <= c || a + c <= b || b + c <= a) ? "Non Triangle" : "Triangle")
}

console.log(checkTriangle(7,10,5));