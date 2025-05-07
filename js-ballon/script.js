let ballon = document.querySelector("p");
let size = 1;

document.addEventListener('keydown', function(event) {
    if (size <= 10 ){
        if (event.key === 'ArrowUp'){
            console.log('Up')
            inflate();
        }
        else if (event.key === 'ArrowDown') {
            console.log('Down')
            defalte()
        }
    }else {
            ballon.textContent = '💥'
    }
});


function inflate() {
    size += 0.1;
    ballon.style.fontSize = size + 'rem';
}

function defalte(){
    size -= 0.1;
    ballon.style.fontSize = size + 'rem';
}