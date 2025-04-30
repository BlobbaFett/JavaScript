let date = new Date();
let weeekday = date.getDay();
console.log(weeekday);
let label;

if (weeekday == 0){
    label = 'Sunday'
} else if (weeekday == 1){
    label = 'Monday';
} else if (weeekday == 2){
    label = 'Tuesday';
} else if (weeekday == 3){
    label = 'Wednesday';
} else if (weeekday == 4){
    label = 'Thursday';
} else if (weeekday == 5){
    label = 'Friday';
} else {
    label = 'Saturday';
}

console.log(label);
document.querySelector('span').innerHTML = label;
document.title = 'Today is' + label;

function changeColor(){
    let myText = document.querySelector('p')
    let currentColor = window.getComputedStyle(myText).color;
    console.log(currentColor);
    let buttonText = document.querySelector('button').innerText;
    console.log(buttonText)
    
    if (currentColor == 'rgb(0, 0, 0)'){
        myText.style.color = 'orange';
        document.querySelector('button').innerHTML = 'Make the text black!';
    } else {
        myText.style.color = 'black'
        document.querySelector('button').innerHTML = 'Make the text orange!'

    }

 

}
