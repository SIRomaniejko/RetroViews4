let user = 'usuario@gmail.com';
let pass = 123456;

function signin(){
    if((user==document.getElementById('email').value) &&(pass==document.getElementById('password').value)){
        alert("Usuario existente");
    }
}
document.getElementById('myBtnSignin').addEventListener('click', signin);
