let hour = prompt('Enter an hour (0-23):')

if (hour < 12){
    alert('Good morning!');
} 
else if (hour < 18){
    alert('Good afernoon!');
}
else{
    alert('Good evening!')
}

let number = prompt('Enter a number')
if(number % 2 == 0){
    alert('Even Number');
}
else{
    alert('Odd Number')
}

let score = prompt('Enter the Scholarship')
if(score > 85){
    alert('Eligible for scholarship')
}
else{
    alert('Not eligible')
}


//let coin = prompt('Heads or Tails');
//let flip = ;
if (coin === flip) {
    alert('You guessed correctly! It was ' + flip);
} else {
    alert('Wrong guess! It was ' + flip);
}