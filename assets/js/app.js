
let buttonOpen = document.getElementById('fenetre');
let div = document.createElement("div");
let background = document.getElementById('background');


function open(){
    buttonOpen.addEventListener("click", ()=> {
        innerHeight = window.innerHeight;
        innerWidth = window.innerWidth;
        background.append(div);
        background.style.backgroundColor = 'rgba(0,0,0,0.21)';
        background.style.width = '100%';
        background.style.height = 'max-height';
        div.style.width = '45%';
        div.style.height = '500px';
        div.style.display = 'flex';
        div.style.marginLeft = '25%';
        div.style.marginTop = '10rem';
        div.style.border = "1rem solid black";
        div.style.fontSize = "2rem";
    })

}

open()
/**
let features = 'menubar=no, scrollbars=yes, width=500, height=500, statut=no, toolbar=no';
 */