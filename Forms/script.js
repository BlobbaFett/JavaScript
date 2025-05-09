let submit = document.querySelector('input[type=submit]');
let fname = document.querySelector('input[name=fname]');
let lname = document.querySelector('input[name=lname]')


submit.addEventListener('click', printInfo)

function printInfo(){
    console.log(fname.value + ' ' + lname.value);
}
