document.querySelector("#avion").addEventListener("click",mostrarPulgares);
document.querySelector("#imglike").addEventListener("click",mostrarPulgares);
document.querySelector("#imgdislike").addEventListener("click",mostrarPulgares);
document.querySelector("#btnAgregarMiLista").addEventListener("click",mostrarMiLista);

function mostrarPulgares(){
	document.querySelector("#pulgares").classList.toggle("hidden");
	document.querySelector("#pulgares").classList.toggle("descenso");
}
function mostrarMiLista(){
	document.querySelector("#agregadoMiLista").classList.toggle("hidden");
	document.querySelector("#agregadoMiLista").classList.toggle("descenso");
	setTimeout(ocultarMensaje,2000);
}
function ocultarMensaje(){
	document.querySelector("#agregadoMiLista").classList.toggle("hidden");
	document.querySelector("#agregadoMiLista").classList.toggle("descenso");
}