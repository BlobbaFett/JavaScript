function light_on(){
    let light = document.querySelector('.light-box')
    console.log(light)
    let switch_light = document.querySelector('.switch-box');
    console.log(switch_light)
    light.classList.toggle("light-on")
    switch_light.classList.toggle("switch-on");

}