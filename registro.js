let boton = document.getElementsByClassName("botonConfirmar")[0];
boton.addEventListener("click", comprobarCampos);

let inputs = document.getElementsByClassName("inputLogeo");
let labels = document.getElementsByTagName("label");

function comprobarCampos(){
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){
            inputs[i].classList.add("inputError");
            let v = labels[i].textContent;
            v = v.split(" ")[0];
            let mensajeErrorActual =  " Error: Campo incompleto";
            mensajeErrorActual = " -" + mensajeErrorActual;
            labels[i].innerHTML = v+ mensajeErrorActual;
            labels[i].classList.add("mensajeError");
        }
    }
    if(document.getElementsByClassName("inputError").length == 0){
        document.location.href = "cardPrice.html";
    }
}

