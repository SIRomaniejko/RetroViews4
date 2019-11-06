 document.getElementById('secEpis').addEventListener('click', mostrarEpisodios);
 document.getElementById('secSim').addEventListener('click', mostrarSimilares);
 document.getElementById('secCom').addEventListener('click', mostrarComentarios);
 document.getElementById('episodios').style = "display:block";
 document.getElementById('comments').style = "display:none";
 document.getElementById('similares').style = "display:none";

function mostrarEpisodios(){
    document.getElementById('episodios').style = "display:block";
    document.getElementById('comments').style = "display:none";
    document.getElementById('similares').style = "display:none";
}
function mostrarSimilares(){
    document.getElementById('similares').style = "display:block";
    document.getElementById('comments').style = "display:none";
    document.getElementById('episodios').style = "display:none";
}
function mostrarComentarios(){
    document.getElementById('comments').style = "display:block";
    document.getElementById('similares').style = "display:none";
    document.getElementById('episodios').style = "display:none";

}