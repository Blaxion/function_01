// Exo 1
function addition(x , y) {
    return x+y;
}
console.log(addition(1,2));


// Exo 2
function soustraction(x , y) {
    return x-y;
}
console.log(soustraction(1,2));


// Exo 3
function multiplication(x , y) {
    return x*y;
}
console.log(multiplication(6,6));


//  Exo 4
function division(x , y) {
    return x/y;
}
console.log(division(1,2));


//  Exo 5
function modulo(x , y) {
    return x%y;
}
console.log(modulo(1,2));


//  Exo 6
function racine(x) {
    return Math.sqrt(x);
}
console.log(racine(36));


//  Exo 7
function puissance(x,y) {
    return Math.pow(x,y);
}
console.log(puissance(10,2));


// Exo 8
function capitalize (str){
    return str.charAt(0).toUpperCase()+str.substr(1).toLowerCase();
}
console.log(capitalize("fArhAd"));


// Exo 9
function calcul (nbr1 , operator , nbr2){
    switch (operator) {
        case "+":
            return addition(nbr1,nbr2);
            
        case "-":
            return soustraction(nbr1,nbr2);
            
        case "*":
            return multiplication(nbr1,nbr2);
            
        case "/":
            return division(nbr1,nbr2);
            
        default:
            return "Nawak!?!?!?";
    }
}
console.log(calcul(5,"*",5));
