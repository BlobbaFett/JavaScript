let Rcoin = document.querySelector('#coin');

function HeaoTA(x, y){
    let HoT = Math.random();;
    if (HoT <= 0.5) {
        return 'Ganaste Pequeño' + x;
    }
    else {
        return 'Perdiste' + y;
    }
}
function HeaoTA2(x, y){
    let HoT = Math.random();;
    if (HoT <= 0.5) {
        return 'Ganaste Pequeño' + y;
    }
    else {
        return 'Perdiste' + x;
    }
}
heads.addEventListener('click', function() {
    HeaoTA('🟡', '🪙')
    Rcoin.textContent = HeaoTA('🟡', '🪙')
});

tails.addEventListener('click', function(){
    HeaoTA2('🟡', '🪙')
    Rcoin.textContent = HeaoTA2('🟡', '🪙')
})