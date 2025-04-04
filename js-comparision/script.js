let value1 = 10;
let value2 = 'hello';
let result1 = value1 > 5;
let result2 = value2.length == 5;
let finalResult = result1 && result2;
console.log(finalResult)

let stringA = 'apple';
let stringB = 'banana';
let comparisionResult = stringA < stringB //is going to be true because the letter a is before letter in the alphabet
console.log(comparisionResult)

let num1 = 7;
let num2 = '7';
let strictEquality = num1 === num2;
let looseEquality = num1 == num2;
console.log(strictEquality);
console.log(looseEquality);

let sunny = false;
let raining = true;
canGoOutside = sunny || !raining;
console.log(canGoOutside);

let score = 85;
let highScore = 90;
let levelCompleted = true;
let bonusAvailable = ((score >= 80) && levelCompleted);
let extraPoints = (bonusAvailable || (highScore === score)) ;
console.log(extraPoints); // The user will recieve extra points