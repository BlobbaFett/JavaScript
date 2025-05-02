function makeElements(){
    let container = document.querySelector('#container');

    let paragraph = document.createElement('p')
    paragraph.style.cssText = 'color:red;';
    paragraph.textContent = 'Hey! Im red.';
    container.appendChild(paragraph);

    let papa = document.createElement('h3')
    papa.style.cssText = 'color:blue;';
    papa.textContent = 'Im a blue h3';
    container.appendChild(papa);

    let superdiv = document.createElement('div')
    superdiv.setAttribute("style", "background: pink; border: black 1px solid")

    let minidiv1 = document.createElement('h1')
    minidiv1.textContent = 'Im in a div';

    let minidiv2 = document.createElement('p')
    minidiv2.textContent = 'ME TOO!';

    superdiv.appendChild(minidiv1)
    superdiv.appendChild(minidiv2)
    container.appendChild(superdiv)
}