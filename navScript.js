let sidebar =  document.querySelector(".sidebar");

document.querySelector("#hambaga").addEventListener("click", ()=>{
    sidebar.classList.remove("cerrado");
    sidebar.classList.add("abierto");
})


document.querySelector("#cerrarSidebar").addEventListener("click", ()=>{
    sidebar.classList.remove("abierto");
    sidebar.classList.add("cerrado");
})

document.querySelector(".lupa").addEventListener("click", ()=>{
    document.querySelector(".nav-mobil").classList.add("hidden");
    document.querySelector(".busquedaMobil").classList.remove("hidden");
})

document.querySelector("#busquedaReturn").addEventListener("click", ()=>{
    document.querySelector(".nav-mobil").classList.remove("hidden");
    document.querySelector(".busquedaMobil").classList.add("hidden");
})

document.querySelector(".js-bell").addEventListener("click", ()=>{
    document.querySelector("#notificacionContainer").classList.toggle("hidden");
})

document.querySelector("#js-bell-mobile").addEventListener("click", ()=>{
    document.querySelector("#notificacionContainer").classList.toggle("hidden");
})

document.querySelectorAll(".js-openFilters").forEach(boton=>{
    boton.addEventListener("click", ()=>{
        document.querySelectorAll(".contenedorFiltro").forEach(contenedor=>{
            contenedor.classList.toggle("hidden");
        })
    })
})