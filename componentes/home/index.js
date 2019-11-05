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