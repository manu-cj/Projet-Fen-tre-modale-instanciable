let body = document.querySelector("body");
let buttonOpen = document.getElementById('fenetre');
let div = document.createElement("div")


function open(){
    let features = 'menubar=no, scrollbars=yes, width=500, height=500, statut=no, toolbar=no'
    div.open(' ', '', features);
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.border = 'solid 5px black';
    div.style.backgroundColor = 'red'
    body.append(div);
}

buttonOpen.addEventListener("click", ()=> {
    open();
})