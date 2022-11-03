
const btnPrueba = document.querySelector('#btn-prueba')
// atrape el boton

btnPrueba.onclick = function(event){
    console.log("click desde el boton")
    console.log(event)
    Swal.fire("hola mundo")
}
//------------------------------

//definamons una nueva funcion para el sweet alert






const btnPregunta = document.querySelector('#btn-pregunta')

btnPregunta.onclick = function(){
    Swal.fire("Alguna pregunta ", "Aca eñ texto de la pregunta en cuestion")
}

//-----------------------------------

const btnError= document.querySelector('#btn-error')

//---------------------------------------
//fiuncion creada por nosotros para sweet alert
function showAlert(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer: "<a href ='https://google.com'> mas info"
    })
}

btnError.onclick = function(){
    showAlert("error" , "hubo un error", "email or password erroneos");
};

//---------------------------------------------------------
const btnWarning = document.querySelector("#btn-warning")

btnWarning.onclick = function(){
    showAlert("warning","ALERTA DE PELIGRO","El peligro se ecerca")
}



//

const btnAlertBotones= document.querySelector("#btn-alert-botones")

btnAlertBotones.onclick = function(){
    Swal.fire({    
        title: "Alerta",
        text: "Texto de Alerta",
        showDenyButton :true,
        showCancelButton: true,
        confirmButtonText : "guardar",
        denyButtonText: "negar"
    }).then((resultado)=>{
        console.log("resultado",resultado);
        if(resultado.isConfirmed){
            showAlert("success","conrirmado", "se confirmo la operacon");
            console.log("marco la confirmacion")
        }
        if(resultado.isDenied){
            showAlert("error","negado", "se nego la operacion");
            console.log("nego la operacion")
        }
       

    })
}