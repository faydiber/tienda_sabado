
export function ampliarInformacion(event){
   let producto={}
  if(event.target.classList.contains("btn")){


   console.log(event.target.parentElement.querySelector('img').src)
    
   
   
     
      producto={
                  
         foto: event.target.parentElement.querySelector("img").src,
         nombre: event.target.parentElement.querySelector("h4").textContent,
         descripcion:event.target.parentElement.querySelector("p").textContent,
        precio:event.target.parentElement.querySelector("h6").textContent
        
     }
    
    
    let foto=document.getElementById("fotoinfo")
    foto.src=producto.foto

    let nombre=document.getElementById("nombreinfo")
    nombre.textContent=producto.nombre

    let descripcion=document.getElementById("desinfo")
    descripcion.textContent=producto.descripcion

    let precio=document.getElementById("preinfo")
    precio.textContent=producto.precio


  }
}

