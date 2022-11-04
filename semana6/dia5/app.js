//QUE ES UN API .
//APLICATION PROGRAMMIG INTERFACE
// ES UN SERVICIO EL CUAL PUEDE PROVEER INFORMACIO O TAMBIEN PUEDE CREARLA

//EN JS EXISTE UNA FUNCION LA UAL SE ACERGA DE PODER HACER LA PETICION
//FETCH ()
// EXISTE TIPO DE PETICIONES DEONDE LAS PRINCIPALES SON 
//GET = OBTNER INFORMAION
//POST = CREAR DATOS
//PUT = ACTUALIZAR DATOS 
//DELETE = ELIMINAR DATOS 
//FUNCTION ASYNC 
//las fucniones async  fueron creadas para poder ejecutar algo y en caso la ejcucion de esto demoas mas de lo nomar esper parapoder pasar a la sgte funcion..
//https://api.github.com/users/guillermosifu
//hay un tiempo de espera nosa sabemos cuanto puede tardar 
//peticion.. no esta bien estructurada nunca retornara nada 

const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUserName = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubLocation = document.querySelector("#github-location");
const githubTwitter = document.querySelector("#github-twitter");

//necesitamos INPUT Y BUTTON 
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search")

githubActionSearch.onclick =()=>{
    const username = githubInputSearch.value;
    githubInputSearch.value = "";
    //aca nos falata validad si el inut esta vacio 
    if(username ===""){
        Swal.fire({
            title: "error",
            text: "debes llenar el campo usario",
            icon:"error"        
        });
        return;
    }
    //ojo!!! solo nos mostrara el alert si el input esta vacio..
    //recuerden que el return termina la ejecucion
    obtenerDatosgithub(username);
};




const obtenerDatosgithub = async(username = "guillermosifu")=>{


    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    if(data.message === "Not Found"){
        Swal.fire({
            title:"Error",
            text: "No se econtro el usuario",
            icon: "error",
        });
        return;
    }

    setDataUser(data)
}

const setDataUser = (data)=>{
    imgProfile.src = data.avatar_url;
    githubName.innerHTML = data.name
}

//llamar a la funcion
obtenerDatosgithub()