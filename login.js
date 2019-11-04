let user = 'usuario@gmail.com';
let pass = 123456;




function login(){
    if(!(user==document.getElementById('correo').value) &&!(pass==document.getElementById('palabraSecreta').value)){
        alert("Usuario inexistente");
    }
}

document.getElementById('myBtn').addEventListener('click', login);
