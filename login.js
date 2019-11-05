document.getElementById('myBtn').addEventListener('click', login);

let user = 'usuario@gmail.com';
let pass = 123456;
document.getElementById('error').style = "display : none";

function login(){
    if(!(user==document.getElementById('correo').value) &&!(pass==document.getElementById('clave').value)){
        document.getElementById('correo').style = "border: 2px solid red";
        document.getElementById('clave').style = "border: 2px solid red";
        document.getElementById('error').style = "display : block;margin-left:3%;color:red;";   
    }
    else{
        document.getElementById('correo').style = "border: 1px solid green";
        document.getElementById('clave').style = "border: 1px solid green";
        document.getElementById('error').style = "display : none;"; 
    }
}

