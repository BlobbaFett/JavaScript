//Exercise 1
let value1 = 10;
let value2 = 'hello';
let result1 = value1 > 5;
let result2 = value2.length == 5;
let finalResult = result1 && result2;
console.log('Exercise 1')
console.log(finalResult)

//Exercise 2
let stringA = 'apple';
let stringB = 'banana';
let comparisionResult = stringA < stringB //is going to be true because the letter a is before letter in the alphabet
console.log('Exercise 2')
console.log(comparisionResult)

//Exercise 3
let num1 = 7;
let num2 = '7';
let strictEquality = num1 === num2;
let looseEquality = num1 == num2;
console.log('Exercise 3')
console.log(strictEquality);
console.log(looseEquality);

//Exercise 4
let sunny = false;
let raining = true;
canGoOutside = sunny || !raining;
console.log('Exercise 4')
console.log(canGoOutside);

//Exercise 5
let score = 85;
let highScore = 90;
let levelCompleted = true;
let bonusAvailable = ((score >= 80) && levelCompleted);
let extraPoints = (bonusAvailable || (highScore === score)) ;
console.log('Exercise 5')
console.log(extraPoints); // The user will recieve extra points