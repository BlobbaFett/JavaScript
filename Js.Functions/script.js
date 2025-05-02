//Exercice 1
function add7(num) {
    return 4 + num
}
let sum = add7(7);
console.log(sum);

//Exercise 2
function multiply(num2){
    return num2 * (4+2)
}
let product = multiply(2)
console.log(product)

//Exercise 3
function lastletter(word){
    return word[word.length - 1]
}
let last = lastletter('abcd');
console.log(last);

//Exercise 4
function capitalize(word2){
    return word2[0].toUpperCase() + word2[1].toLowerCase() + word2[2].toLowerCase() + word2[3].toLowerCase() + word2[4].toLowerCase() + word2[5].toLowerCase() + word2[6].toLowerCase();
}
let capital = capitalize('juanito')
console.log(capital);