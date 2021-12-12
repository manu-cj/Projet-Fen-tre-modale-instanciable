let body = document.querySelector("body");
let buttonConnect = document.getElementById('fenetre');
let div = document.createElement("div");
let background = document.getElementById('background');


function open(){
    buttonConnect.addEventListener("click", ()=> {
        background.append(div);
        background.style.display = 'flex';
        background.style.flexDirection = 'column';
        background.style.alignItems = 'center';
        body.style.backgroundColor = 'rgb(100,114,106)';
        div.style.width = '40%';
        div.style.height = '450px';
        div.style.display = 'flex';
        div.style.border = "10px ridge coral";
        div.style.backgroundColor = 'white';
        div.style.borderRadius = '20px';
        div.style.marginTop = '10%';
        buttonConnect.remove();

        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';
        div.style.alignContent = 'space-around';
        div.style.justifyContent = 'space-between';

        let divClose = document.createElement('div');
        let closeButton = document.createElement('button');
        let input1 = document.createElement('input');
        let input2 = document.createElement('input');
        let connection = document.createElement('button');

        divClose.appendChild(closeButton);
        div.appendChild(divClose);
        div.appendChild(input1);
        div.appendChild(input2);
        div.appendChild(connection);

        input1.placeholder = "Votre E-mail";
        input2.placeholder = "Votre mot de passe";
        input2.type = "password";

        divClose.style.display = 'flex';
        divClose.style.flexDirection = 'row';
        divClose.style.justifyContent = 'flex-end';

        divClose.style.width = '100%';
        divClose.style.height = '5%';
        closeButton.style.width = '5%';
        closeButton.style.height = '100%';
        closeButton.style.borderColor = 'white';
        closeButton.innerHTML = '<i class="far fa-window-close"></i>';
        closeButton.style.fontSize = '1.2rem';
        closeButton.style.color = 'coral';
        input1.style.width = '40%';
        input1.style.height = '40px';

        input2.style.width = '40%';
        input2.style.height = '40px';

        connection.style.width = '30%';
        connection.style.height = '30px';
        connection.innerHTML = 'Connection';
        connection.style.marginBottom = '50px';
        div.style.fontSize = "2rem";

        closeButton.addEventListener("click", () => {
            div.remove();
            input1.remove();
            input2.remove();
            divClose.remove();
            closeButton.remove();
            connection.remove();
            body.style.backgroundColor = 'white';
            body.appendChild(buttonConnect);
        })
    })

}


open()
