
export function pintarTienda(){

    let productos=[
        {foto:'img/foto1.jpg',  nombre:"volvo FH",      precio:500000000,  descripcion:"transmicion mecanica 0km  "},
        {foto:"img/foto2.png",  nombre:"faw",           precio:600000000,  descripcion:"transmicion mecanica  gas natural  0km"},
        {foto:"img/foto3.jpg",  nombre:"volvo FM",      precio:500000000,  descripcion:"transmicion automatica  conbustible diesel 0km"},
        {foto:"img/foto4.jpg",  nombre:"volvo FMX",     precio:450000000,  descripcion:"transmicion manual  conbustible diesel 0km"},
        {foto:"img/foto5.jpg",  nombre:"volvo FH16",    precio:350000000,  descripcion:"transmicion mecanica  conbustible gasolina 1000000km"},
        {foto:"img/foto13.jpg", nombre:"t800",          precio:55000000,   descripcion:"transmicion automatica  conbustible gasolina 5000km"},
        {foto:"img/foto9.png",  nombre:"volvo FH12",    precio:300000000,  descripcion:"transmicion automatica  gas natural diesel 0km"},
        {foto:"img/foto10.jpg", nombre:"furgon",        precio:190000000,  descripcion:"transmicion manual  conbustible diesel 0km"},
        {foto:"img/foto11.jpg", nombre:"volvo electric",precio:400000000,  descripcion:"transmicion electrica  conbustible diesel 0km"},
        {foto:"img/foto12.webp",nombre:"furgon FVR",    precio:120000000,  descripcion:"transmicion mecanica  conbustible diesel 0km"}
    ]
    
    //recorriendo un arreglo con js
    //buscar/seleccionar/ esculcar
    // productos.forEach(function(producto){
       
    // })
    
    
    // //escuchando clic en el boton
    // let boton=document.getElementById("boton")
    
    // //detectando el primer evento
    // boton.addEventListener("click",cambiarFoto)
    // //creando una funcion
    // function cambiarFoto(){
    //    let foto=document.getElementById("fotoprueva")
    //    foto.src="img/foto3.jpg"
    // }
    //recorrer un arreglo con foreach
    //creo una ariable para almacena la base en la que boy a pintar
    
    let fila=document.getElementById("fila")
   
    
    productos.forEach(function(producto){
        //reseta para pintar en js
        //paso 1: crear la estructura que nesecite
        //cro la columna
        let columna=document.createElement("div")
        columna.classList.add("col")
        //creo la targeta
        let targeta=document.createElement("div")
        targeta.classList.add("card")
        targeta.classList.add("h-100")
    
        //creo la imagen
        
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre
        
        let descripcion=document.createElement("p")
       descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion

        let precio= document.createElement("h6")
        precio.classList.add()
        precio.textContent=producto.precio


        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
    
        //paso 2:ordenar la estrucctura  padre e hijos 
        targeta.appendChild(foto)
        targeta.appendChild(titulo)
        targeta.appendChild(descripcion)
        targeta.appendChild(precio)
        targeta.appendChild(boton)
        columna.appendChild(targeta)
        
        fila.appendChild(columna)
       
      
      
        //************************ */
        //crando boton
        

       
      
    })
    
}
