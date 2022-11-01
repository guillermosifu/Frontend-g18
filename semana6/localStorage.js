//primero la captura del elemento que disparara un evento 
const btnLogin = document.querySelector('#btn-login');
//------------------------------------------------

//la funcion y el evento
btnLogin.onclick = function (event){
 event.preventDefault ();

 const inputs = document.querySelectorAll('input')
 // inserta una claor o almacenar al localstorage 

 inputs.forEach((input)=>{
     
    console.log(inputs)
    localStorage.setItem(input.name , input.value)
 })
login() 

}

// esta es la forma de captura elemento del localstorage
const email =localStorage.getItem('email');
const password =localStorage.getItem('password');

function login(){
const email =localStorage.getItem('email');
const password =localStorage.getItem('password');
form.style.display = "none";
usuarioSection.style.display = "block";
titleEmail.innerHTML = email;
titlePassword.innerHTML = password;

}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");
const usuarioSection = document.querySelector("#usuario-logged");

if(email !== null && password !== null){
   //el usuario ya esta logeado
   //si el usario esta logeadio voy ocultar el form
}else {
   usuarioSection.style.display = "none"
}

btnCerrarSesion.onclick = function(){
   //vamos a eliminar las variable del local storage
   localStorage.clear();

   //mostrar el formulario y ocultar el mensaje 
   form.style.display="block";
   usuarioSection.style.display= "none";
}

