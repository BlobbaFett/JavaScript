let num1input = document.querySelector('#digit1');
let num2input = document.querySelector('#digit2');

let sum = document.querySelector('#sum');
let sub = document.querySelector('#sub');
let multi = document.querySelector('#multi');
let divi = document.querySelector('#divi');

let resultdiv = document.querySelector('#result')

function addition(x, y){
    return x + y;   
};
function subtraction(x, y){
    return x - y
}
function multiplication(x, y){
    return x * y;
}
function divition(x, y){
    return x / y;
}
sum.addEventListener('click', function() {
    let num1 = parseFloat(num1input.value)
    let num2 = parseFloat(num2input.value)
    addition(num1, num2)
    resultdiv.textContent = addition(num1, num2)
});

sub.addEventListener('click', function() {
    let num1 = parseFloat(num1input.value)
    let num2 = parseFloat(num2input.value)
    subtraction(num1, num2)
    resultdiv.textContent = subtraction(num1, num2)
});

multi.addEventListener('click', function() {
    let num1 = parseFloat(num1input.value)
    let num2 = parseFloat(num2input.value)
    multiplication(num1, num2)
    resultdiv.textContent = multiplication(num1, num2)
});

divi.addEventListener('click', function() {
    let num1 = parseFloat(num1input.value)
    let num2 = parseFloat(num2input.value)
    divition(num1, num2)
    resultdiv.textContent = divition(num1, num2)
});



