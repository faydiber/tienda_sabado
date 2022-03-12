
export function pintarTienda(){

    let productos=[
        {nombre:"volvo FH",      precio:500000000,foto:'img/foto1.jpg',  descripcion:"transmicion mecanica 0km  "},
        {nombre:"faw",           precio:600000000,foto:"img/foto2.png",  descripcion:"transmicion mecanica  gas natural  0km"},
        {nombre:"volvo FM",      precio:500000000,foto:"img/foto3.jpg",  descripcion:"transmicion automatica  conbustible diesel 0km"},
        {nombre:"volvo FMX",     precio:450000000,foto:"img/foto4.jpg",  descripcion:"transmicion manual  conbustible diesel 0km"},
        {nombre:"volvo FH16",    precio:350000000,foto:"img/foto5.jpg",  descripcion:"transmicion mecanica  conbustible gasolina 1000000km"},
        {nombre:"t800",          precio:55000000,foto:"img/foto7.jpg",  descripcion:"transmicion automatica  electrico 5000km"},
        {nombre:"volvo FH12",    precio:300000000,foto:"img/foto9.png",  descripcion:"transmicion automatica  gas natural diesel 0km"},
        {nombre:"furgon",        precio:190000000,foto:"img/foto10.jpg", descripcion:"transmicion manual  conbustible diesel 0km"},
        {nombre:"volvo electric",precio:400000000,foto:"img/foto11.jpg", descripcion:"transmicion electrica  conbustible diesel 0km"},
        {nombre:"furgon FVR",    precio:120000000,foto:"img/foto12.webp",descripcion:"transmicion mecanica  conbustible diesel 0km"}
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
    
        //paso 2:ordenar la estrucctura  padre e hijos 
        targeta.appendChild(foto)
        columna.appendChild(targeta)
        fila.appendChild(columna)

        //************************ */
        //crando boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-info","mx-4")
        boton.textContent="ver producto"
        targeta.appendChild(boton)

    })
    
}
