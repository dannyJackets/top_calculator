function operate(operator, a, b){
    operator === "+" ? add(a, b) :
    operator === "-" ? subract(a, b) : 
    operator === "*" ? multiply(a, b) :
    operator === "/" ? divide(a, b) : null;
}

function add(a, b){
    return(a + b);
}

function subtract(a, b){
    return(a - b);
}

function multiply(a, b){
    return(a * b);
}

function divide(a, b){
    return(a / b);
}