let light = document.querySelector('.light-box')
let switch_light = document.querySelector('.switch-box');
    function light_on(){
    
    if (light == '.light-on'){
        light.classList.toggle("light-off")
        switch_light.classList.toggle("switch-off");
    } else {
        light.classList.toggle("light-on")
        switch_light.classList.toggle("switch-on");
    }
}