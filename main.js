function Alerta(){
    alert('Gracias por tu mensaje <3');
}
let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funcion para mostrar el porcentaje de las habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("react");
        habilidades[1].classList.add("moodle");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("java"); 
        habilidades[5].classList.add("sql"); 
        habilidades[6].classList.add("comunicacion"); 
        habilidades[7].classList.add("trabajo"); 
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");  

    }

}
window.onscroll = function(){
    efectoHabilidades();
}
