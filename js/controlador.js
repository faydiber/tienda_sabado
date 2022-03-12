//importando modulos

    import { pintarTienda } from "./llenadoTienda.js";
   


    //lamando al modulo de pintar
    pintarTienda()

    //llamando al modulo ampliarinfo
    let contenedorTienda=document.getElementById("fila")
    contenedorTienda.addEventListener("click",function(event){
        console.log(event.target)
    })