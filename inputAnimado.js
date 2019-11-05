document.getElementById("btnError").addEventListener("click", animarInput);
let div = document.getElementsByClassName("contenedorInput")[0];
let input = document.getElementsByClassName("input")[0];
function animarInput(){

	if(div.classList.contains("animarDiv") &&
		input.classList.contains("inputError")){
		div.classList.remove("animarDiv");
		input.classList.remove("inputError");
	}else{
		input.classList.add("inputError");
		div.classList.add("animarDiv");
	}
}