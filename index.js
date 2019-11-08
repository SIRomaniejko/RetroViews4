document.querySelector("button").addEventListener("click", ()=>{
    posActual = posActual + suma;
    row.scroll({
        top: 0,
        left: posActual,
        behavior: 'smooth'
      });
})

let posActual = 0;
let suma = 800;

let row = document.querySelector(".row");

function scrollPos(){
    console.log(document.querySelector(".scroll-movies").scrollLeft);
}
let movimientoScroll = 500;
document.querySelectorAll(".sectorPeliculas").forEach(sector=>{
    let window = sector.querySelector(".scroll-movies");
    console.log(sector);
    console.log(sector.querySelector(".js-scrollLeft"));
    sector.querySelector(".js-scrollLeft").addEventListener("click", ()=>{
        scrollHorizontal(false, window);
    })
    sector.querySelector(".js-scrollRight").addEventListener("click", ()=>{
        scrollHorizontal(true, window);
    })
})


function scrollHorizontal(toTheRight, window){
    let nuevaDistancia = window.offsetWidth/2
    if(!toTheRight){
        nuevaDistancia = -nuevaDistancia;
    }
    window.scroll({
        top: 0,
        left: window.scrollLeft + nuevaDistancia,
        behavior: 'smooth'
    });
}


console.log(document.querySelector(".movie-card"));

document.querySelectorAll(".movie-card").forEach(card=>{
    card.addEventListener("mouseover", event=>{
        console.log(card);
        let thisImagen = card.querySelector("img");
        let thisInfo = card.querySelector(".darkened-card");
        thisImagen.classList.add("agrandar");
        thisInfo.classList.add("mostrarInfo");
        document.querySelectorAll(".agrandar").forEach(imagen=>{
            if(thisImagen != imagen){
                imagen.classList.remove("agrandar");
            }
        })
        document.querySelectorAll(".mostrarInfo").forEach(info=>{
            if(thisInfo != info){
                info.classList.remove("mostrarInfo");
            }
        })
    })
})

