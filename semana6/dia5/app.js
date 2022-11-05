const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const template = document.getElementById("template");
const tareaList = document.getElementById("lista-tareas")

let tareas = {};

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    setTareas()
})

const setTareas=()=>{
    if(input.value.trim()===''){
        return //al pner return hacemos que al ingresas al if se de se de producir toda la funcion
    };
    const tarea = {
        id:Date.now(),
        text:input.value,
        estado: false
    };
 
    tareas[tarea.id]= tarea; // puish objeto identificador a la lsta de objetos lo cual va ser igual al objeto  principal
    formulario.reset();
    input.focus();
    pintarTareas()
}

const pintarTareas=()=>{
 tareaList.innerHTML ='';
 Object.values(tareas).forEach(tarea =>{
    
 })
}