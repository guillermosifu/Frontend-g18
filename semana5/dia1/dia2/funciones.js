
//una funcione es un conjunto de soluciones o ejecuciones  paa poder realizar tareas

//funciones expresiva

function nombreDeLaFuncion(){
//una vez declarada mi funcion todo el codigo que hagmos 
//dentro de este solo se va ejecuatar cunada la llame..

console.log("estudiando funciones ")
}

nombreDeLaFuncion()

//una fucion es creada para poder reautilizar codigo 
//una de las misiones de la funcio es poder hacer un trabajo repetitivo 


function sumar (numero1 ,numero2){
    //orimero voy aconvertirlos paremtro a numeros
  
    const suma = numero1 + numero2

console.log("es el resultado" , suma)
}


sumar(40,20)

// quw cosa es return 
//return es la palabra clave la que se encra de retonanros un valor 

//funcione flecha la suma 
const suma2 =(a,b,c,d,e)=>{
 return(a+b+c+d+e) 

}
 console.log("otra forma",suma2(60,30,10,10,10))
