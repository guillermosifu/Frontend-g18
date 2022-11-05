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

// aca atrapamos todos los elemtnos quye usaremos en la vista o el navegador 
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
const githubUrl = document.querySelector("#github-url");
const githubBuild = document.querySelector("#github-build");
//-----------------------------------------------------

//necesitamos INPUT Y BUTTON 
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search")
//------------------------------------------------------
// es el evento principal - el onclick
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

//vamos a detectar el eebtmo de enter cuando entremos en el input 
// est hace que funcione con el enter 
githubInputSearch.addEventListener("keyup", function(event){
    if(event.key ==="Enter"){
        obtenerDatosgithub(event.target.value)
    }a
})
//------------------------------------------------------------



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
};

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}


const setDataUser = (data)=>{
    imgProfile.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubBio.innerHTML = data.bio;
    githubUserName.innerHTML=`@${data.login}`;
    githubJoined.innerHTML= formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
    githubLocation.innerHTML= data.company;
    githubTwitter.innerHTML = data.twitter_usernname; 
    githubUrl.innerHTML = data.html_url ;
    githubBuild.innerHTML =`@${data.login}`

}

//llamar a la funcion
obtenerDatosgithub()