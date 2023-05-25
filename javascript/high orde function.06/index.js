function div (a, b) {
    return( a/b)
}

function mult(a , b) {
    return (a*b);
}

function sub(a , b) {
    return(a-b);
}

function calculator (a, b , operator) {
    return operator(a,b)
}

calculator(10,5, mult)