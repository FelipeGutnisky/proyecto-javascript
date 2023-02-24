/*Class Constructora*/
class tablas{
    constructor(id,modelo,largo,precio, tipo,imagen1,imagen2,imagen3){
        this.id = id
        this.modelo = modelo.toUpperCase()
        this.largo = largo
        this.precio = parseInt(precio)
        this.tipo = tipo.toUpperCase()
        this.imagen1 = imagen1
        this.imagen2 = imagen2
        this.imagen3 = imagen3
    }
}

//array de objetos:

let productos = []

//setear los productos con una petición async-await
const cargarProductos = async () => {
    //ruta relativa del HTML al JSON y abrir con liverServer
    const response = await fetch("../tablas.json")
    const data = await response.json()
    
    for(let tabla of data){
        let tablaNueva = new tablas (tabla.id, tabla.modelo, tabla.largo, tabla.precio, tabla.tipo,tabla.imagen1,tabla.imagen2,tabla.imagen3)
        productos.push(tablaNueva)
    }
    
    localStorage.setItem("productos", JSON.stringify(productos))
}


//preguntar si existe algo en el storage con la clave productos
if(localStorage.getItem("productos")){
    //cuando no sea la primera vez

    for(let tabla of JSON.parse(localStorage.getItem("productos"))){
        let tablaNueva = new tablas (tabla.id, tabla.modelo, tabla.largo, tabla.precio, tabla.tipo,tabla.imagen1,tabla.imagen2,tabla.imagen3)
        productos.push(tablaNueva)
    }
}else{
    cargarProductos()
}
