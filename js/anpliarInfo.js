
export function ampliarInformacion(event){
   //let producto={}
  if(event.target.classList.contains("btn")){

console.log(event.target)
    console.log(event.target.parentElement.querySelector('img').src)
    console.log("hola")
   
     
     let producto={

         foto:  event.target.parentElemet.querySelector('img').src,
        nombre:event.target.parentElemet.querySelector('h4').textContent,
        
        //descripcion:event.target.parentElemet.querySelector("p").textContent,
     
     //   precio:event.target.parentElemet.querySelector("h6").textContent
        
     }
    
   
    // let foto=document.getElementById("fotoinfo")
    //      foto.src=producto.foto
    // let nombre=document.getElementById("nombreinfo")
    //      nombre.textContent=producto.nombre
    //  let descripcion=document.getElementById("nombreinfo")
    // descripcion.textContent=producto.descripcion
    // let precio=document.getElementById("nombreinfo")
    //  precio.textContent=producto.precio


  }
}

