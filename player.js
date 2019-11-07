 document.getElementById('secEpis').addEventListener('click', mostrarEpisodios);
 document.getElementById('secSim').addEventListener('click', mostrarSimilares);
 document.getElementById('secCom').addEventListener('click', mostrarComentarios);
 document.getElementById('episodios').style = "display:block";
 document.getElementById('comments').style = "display:none";
 document.getElementById('similares').style = "display:none";

function mostrarEpisodios(){
    document.getElementById('secEpis').className += "botoneraActiva";
    document.getElementById('secSim').classList.remove("botoneraActiva");
    document.getElementById('secCom').classList.remove("botoneraActiva");

    document.getElementById('episodios').style = "display:block";
    document.getElementById('comments').style = "display:none";
    document.getElementById('similares').style = "display:none";
}
function mostrarSimilares(){
    document.getElementById('secSim').className += "botoneraActiva";
    document.getElementById('secEpis').classList.remove("botoneraActiva");
    document.getElementById('secCom').classList.remove("botoneraActiva");
    document.getElementById('similares').style = "display:block";
    document.getElementById('comments').style = "display:none";
    document.getElementById('episodios').style = "display:none";
}
function mostrarComentarios(){
    document.getElementById('secCom').className += "botoneraActiva";
    document.getElementById('secSim').classList.remove("botoneraActiva");
    document.getElementById('secEpis').classList.remove("botoneraActiva");
    document.getElementById('comments').style = "display:block";
    document.getElementById('similares').style = "display:none";
    document.getElementById('episodios').style = "display:none";

}

let avion = document.getElementById("avion");
console.log(avion);

avion.addEventListener("click",mostrarPulgares);
function mostrarPulgares(){
    console.log("ahhh");
    document.getElementById("pulgares").classList.toggle("hidden");
}
document.getElementById("imglike").addEventListener("click",mostrarPulgares);
document.getElementById("imgdislike").addEventListener("click",mostrarPulgares);