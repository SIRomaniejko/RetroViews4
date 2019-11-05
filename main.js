let sidebar =  document.querySelector(".sidebar");

document.querySelector("#hambaga").addEventListener("click", ()=>{
    sidebar.classList.remove("cerrado");
    sidebar.classList.add("abierto");
})


document.querySelector("#cerrarSidebar").addEventListener("click", ()=>{
    sidebar.classList.remove("abierto");
    sidebar.classList.add("cerrado");
})
