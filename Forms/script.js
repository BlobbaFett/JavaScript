let submit = document.querySelector('input[type=submit]');
let fname = document.querySelector('input[name=fname]');
let lname = document.querySelector('input[name=lname]')
let email = document.querySelector('input[name=email]')
let birth = document.querySelector('input[name=birth]')
let age = document.querySelector('input[name=age]')
let country = document.querySelector('select[name=country]')
let gender = document.querySelector('select[name=gender]')
let fcolor = document.querySelector('input[name=color]')
let password = document.querySelector('input[name=password]')

submit.addEventListener('click', printInfo)

function printInfo(){
    console.log(fname.value + ' ' + lname.value);
    console.log(email.value)
    console.log(birth.value)
    console.log(age.value)
    console.log(country.value)
    console.log(gender.value)
    console.log(fcolor.value)
    console.log(password.value)
}
