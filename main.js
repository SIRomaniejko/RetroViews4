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