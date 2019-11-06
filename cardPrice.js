let cards = document.querySelectorAll(".cardOpcion");
let cajas = document.getElementsByClassName("cajaSmall");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click",()=>{
        activarCard(i);
    });
}

function activarCard(i){
    ocultarTodas();
    cajas[i].classList.remove("oculta");
}
function ocultarTodas(){
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].classList.add("oculta")
    }
}