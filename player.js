
let avion = document.getElementById("avion");

avion.addEventListener("click",mostrarPulgares);
function mostrarPulgares(){
    document.getElementById("pulgares").classList.toggle("hidden");
    document.getElementById("pulgares").classList.toggle("descenso");
}
document.getElementById("imglike").addEventListener("click",mostrarPulgares);
document.getElementById("imgdislike").addEventListener("click",mostrarPulgares);

let btnMiLista = document.getElementById("btnAgregarMiLista");
btnMiLista.addEventListener("click",mostrarMiLista);
function mostrarMiLista(){
    document.getElementById("agregadoMiLista").classList.remove("hidden");
    document.getElementById("agregadoMiLista").classList.toggle("descenso");
    setTimeout(ocultarMensaje,2000);
}
function ocultarMensaje(){
    document.getElementById("agregadoMiLista").classList.add("hidden");
}
