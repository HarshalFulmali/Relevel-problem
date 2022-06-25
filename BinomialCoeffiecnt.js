 function Bino(n, y){
    let NsubY = n - y, facN = 1, facY = 1, facNsunY = 1;
    
    while (n > 0) { 
        facN *= n;
        n--;
    }
    while (y > 0) {
        facY *= y;
        y--; 
    }

    while(NsubY > 0) {
        facNsunY *= NsubY;
        NsubY--;
    }

    let denom = facY * facNsunY;
    let result = facN / denom;
    return result;
}
 

console.log(Bino(6,3));