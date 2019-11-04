"use strict";
document.getElementById("imgFiltro").addEventListener("click", mostrarFiltro);
let filtro = document.getElementsByClassName("contenedorFiltro")[0];
filtro.style.display = "none"
function mostrarFiltro(){
	console.log("dou");
	if(filtro.style.display === "none"){
		filtro.style.display = "block";
	}else{
		filtro.style.display = "none";
	}
}