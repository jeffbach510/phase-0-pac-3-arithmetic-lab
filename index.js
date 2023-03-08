function add(a,b) {
    let addResult = a+b;
    console.log(addResult);
    return addResult;
};
function subtract(a,b) {
    let subResult = a-b;
    console.log(subResult);
    return subResult;
};
function multiply(a,b) {
    let multResult = a*b;
    console.log(multResult);
    return multResult;
};
function divide(a,b) {
    let divResult = a/b;
    console.log(divResult);
    return divResult;
};
function increment(n) {
    let incResult = n+1;
    console.log(incResult);
    return incResult;
};
function decrement(n) {
    let decResult = n-1;
    console.log(decResult);
    return decResult;
};
function makeInt(a) {
    let parsResult = parseInt(a,10);
    return parsResult;
};
function preserveDecimal(a) {
    let presResult = parseFloat(a);
    return presResult;
};