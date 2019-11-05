document.getElementById('myBtnSignin').addEventListener('click', signin);
let user = 'usuario@gmail.com';
let pass = 123456;
document.getElementById('alert').style = "display : none";
function signin(){
     if((user==document.getElementById('email').value)){
         document.getElementById('email').style = "border: 2px solid red";
         document.getElementById('alert').style = "display : block;margin-left:3%;color:red;";
     }
     else{
        document.getElementById('email').style = "border: 1px solid green";
        document.getElementById('error').style = "display : none;"; 
    }
}

 
