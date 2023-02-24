/* CAPTURAS DEL DOM */
let tablasDeSurf = document.getElementById("tablasDeSurf")
let modalBodyCarrito = document.getElementById("modalBodyCarrito")
let guardarTablaBtn = document.getElementById("guardarTablaBtn")
let verTablas = document.getElementById("verTablas")
let ocultarTablas = document.getElementById("ocultarTablas")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
let selectTipo = document.getElementById("selectTipo")
let modalCargarTabla = document.getElementById("modalCargarTabla")
let precioTotal = document.getElementById("precioTotal")
let botonCarrito = document.getElementById("botonCarrito")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
/*FUNCIONES*/
/* AGREGO MI ARRAY AL HTML*/
function cargarTablas(array){
    //Limpio en el DOM el elemento
    tablasDeSurf.innerHTML = ""
//Para cada objeto de mi array hara lo siguiente    
for(const tabla of array){
    //Si el objeto de mi array lleva una imagen en su argumento "imagen3"  genera un carrousel con 3 carousel-item
    if(tabla.imagen3 != ""){
    //Creo un nuevo elemento en mi DOM
    let nuevaTabla = document.createElement("div")
    //Le agrego una clase a dicho elemento
    nuevaTabla.classList.add("col-md-6","col-lg-4","col-xl-3","p-2","feat")
    //Le agrego un style a dicho elemento
    nuevaTabla.style.width = "18rem;"
    //Le agrego la estructura que va a formar parte de dicho elemento
    nuevaTabla.innerHTML= `
    <div id="${tabla.id}" class="carousel slide">
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="${tabla.imagen1}" class="d-block w-100" alt="${tabla.tipo}">
        </div>
        <div class="carousel-item">
            <img src="${tabla.imagen2}" class="d-block w-100" alt="${tabla.tipo}">
        </div>
        <div class="carousel-item">
            <img src="${tabla.imagen3}" class="d-block w-100" alt="${tabla.tipo}">
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#${tabla.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${tabla.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="d-flex justify-content-between align-items-center ">
        <div class="text-center">
            <h2 class="fw-light subtitulo-2 mt-2 text-uppercase">${tabla.modelo} ${tabla.largo}</h2>
            <p class="fw-bold">$${tabla.precio} USD</p>
        </div>
        <button id= "agregarBtn${tabla.id}" class="btn btn-primary btn-sm">Agregar al carrito</button>
    </div>
</div>`
    //Agrego al DOM mediante appendchild dicho elemento a tablasDeSurf capturado anteriormente.
    tablasDeSurf.appendChild(nuevaTabla)
    //Capturo el boton que me va a agregar los productos al carrito
    let agregarBtn = document.getElementById(`agregarBtn${tabla.id}`)
    //Le adjunto un evento a dicho boton donde al clickearlo me llame dos funciones
    agregarBtn.addEventListener("click", ()=>{  
        agregarAlCarrito(tabla)
        //cambia en el icono del carrito el numero que indica la cantidad de productos que se encuentran en el mismo
        numeroCarrito(productosEnCarrito)
    })}// Si el objeto de mi array no lleva una imagen en su argumento "imagen3"  genera un carousel con 2 carousel-item
    else if(tabla.imagen3 == ""){
        let nuevaTabla = document.createElement("div")
        nuevaTabla.classList.add("col-md-6","col-lg-4","col-xl-3","p-2","feat")
        nuevaTabla.style.width = "18rem;"
        nuevaTabla.innerHTML= `
        <div id="${tabla.id}" class="carousel slide">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${tabla.imagen1}" class="d-block w-100" alt="${tabla.tipo}">
            </div>
            <div class="carousel-item">
                <img src="${tabla.imagen2}" class="d-block w-100" alt="${tabla.tipo}">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${tabla.id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${tabla.id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class=" d-flex justify-content-between align-items-center  ">
            <div class="text-center">
                <h2 class="fw-light subtitulo-2 mt-2 text-uppercase">${tabla.modelo} ${tabla.largo}</h2>
                <p class="fw-bold">$${tabla.precio} USD</p>
            </div>
            <button id= "agregarBtn${tabla.id}" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
    </div>` 
    tablasDeSurf.appendChild(nuevaTabla)
    
    let agregarBtn = document.getElementById(`agregarBtn${tabla.id}`)
    agregarBtn.addEventListener("click", ()=>{
        agregarAlCarrito(tabla)
        numeroCarrito(productosEnCarrito)
    })
}//Si el objeto de mi array lleva no una imagen en su argumento "imagen3" y tampoco en su argumento "imagen 2"  genera un carrousel con 1 carousel-item
else if(tabla.imagen2 == "" & tabla.imagen3 == ""){
    let nuevaTabla = document.createElement("div")
        nuevaTabla.classList.add("col-md-6","col-lg-4","col-xl-3","p-2","feat")
        nuevaTabla.style.width = "18rem;"
        nuevaTabla.innerHTML= `
        <div id="${tabla.id}" class="carousel slide">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${tabla.imagen1}" class="d-block w-100" alt="${tabla.tipo}">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${tabla.id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${tabla.id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class=" d-flex justify-content-between align-items-center  ">
            <div class="text-center">
                <h2 class="fw-light subtitulo-2 mt-2 text-uppercase">${tabla.modelo} ${tabla.largo}</h2>
                <p class="fw-bold">$${tabla.precio} USD</p>
            </div>
            <button id= "agregarBtn${tabla.id}" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
    </div>` 
    tablasDeSurf.appendChild(nuevaTabla)
    
    let agregarBtn = document.getElementById(`agregarBtn${tabla.id}`)
    agregarBtn.addEventListener("click", ()=>{
        agregarAlCarrito(tabla)
        numeroCarrito(productosEnCarrito)
    })

}
}}

//Llamo a la función para que al cargar la página ya se encuentren cargados los productos
cargarTablas(productos) 

//CONDICONAL CARRITO
//Creo una variable para luego almacenar los productos en el carrito  
let productosEnCarrito
//Si en el localStorage ya se encuentra la llave carrito
if(localStorage.getItem("carrito")){
    //Aplico un JSON.parse para que el texto se almacene en formato JSON
    //en la variable estructurada "productosEnCarrito"
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
    //establezco en el icono del carrito el numero que indica la cantidad de productos/objetos que se encuentran en la variable
    numeroCarrito(productosEnCarrito)
}//Si en el localStorage no se encuentra la llave carrito
else{
    //limpio la variable estructurada
    productosEnCarrito = []
    //Seteo en el localStorage una llave carrito cuyo valor van a ser los productos/objetos que se encuentren en la variable estructurada
    localStorage.setItem("carrito", productosEnCarrito)
    //establezco en el icono del carrito la cantidad de productos/objetos que se encuentran en la variable cuyo este caso va a ser 0 
    numeroCarrito(productosEnCarrito)
}

// FUNCTION AGREGAR AL CARRITO
function agregarAlCarrito(tabla){
    //Creo un variable que almacena un metodo find que me va a buscar si el producto/objeto se encuentran almacenado en la variable estructurada
    // "productosEnCarrito" mediante su id 
    let tablaAgregada= productosEnCarrito.find((elem)=>elem.id == tabla.id)
    //Si no encuentra dicho producto/objeto en la variable estructurada "productosEnCarrito"
    //la variable "tablaAgregada" tomara el valor de "undefined"
    if(tablaAgregada == undefined){
        //Agrego dicho producto/objeto a la variable que almacena los productos en el carrito
        productosEnCarrito.push(tabla)
        //Seteo nuevamente el localStorage para que en la llave "carrito" me aparezca el producto/objeto agregado recientemente
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    
        //Le muestro una alerta al usuario para que sepa que su producto fue agregado al carrito
        Toastify({
            text: `La tabla ${tabla.modelo} ${tabla.largo} ha sido AGREGADA al carrito`,
            duration: 3000,
            gravity: "top", 
            position: "right", 
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            color: "black"
            },
        }).showToast();
    

    }//Si dicho producto ya se encuentra en el carrito
    else{
        //Le muestro una alerta para que sepa que su producto ya se encuentra en el carrito
        Toastify({
            text: `La tabla ${tabla.modelo} ${tabla.largo} YA ha sido AGREGADA al carrito`,
            duration: 3000,
            gravity: "top", 
            position: "right", 
            style: {
            background: "linear-gradient(to right, #500505, #e00a0a)",
            color: "white"
            },
        }).showToast();
    }
}


    

// FUNCTION CARGAR CARRITO
function cargarProductosCarrito(array){
    //limpio el elemento de mi DOM cuyo id es "modalBodyCarrito"
    modalBodyCarrito.innerHTML = ""
    //Por cada producto/objeto que se encuentra almacenado dentro del array/variable estructurada "productosEncarrito" modifico el DOM y 
    //le agrego al elemento cuyo id es "modalBodyCarrito" la siguiente estructura 
    array.forEach((productosEnCarrito)=>{
        modalBodyCarrito.innerHTML +=
        `<div class="card border-primary mb-3" id ="productoCarrito${productosEnCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top img-fluid "  src="../img/${productosEnCarrito.imagen1}" alt="${productosEnCarrito.modelo}">
                <div class="card-body">
                        <h4 class="card-title">${productosEnCarrito.modelo}</h4>    
                        <p class="card-text">$${productosEnCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar${productosEnCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
        `
})
    //Segundo forEach para adjuntar evento
    //Por cada producto/objeto que se encuentra almacenado dentro del array "productosEncarrito"
    array.forEach((productosEnCarrito) => {
        //Tomo el boton que sirve para eliminar el producto del carrito mediante su id y le adjunto el siguiente evento
        document.getElementById(`botonEliminar${productosEnCarrito.id}`).addEventListener("click",()=>{
        //Tomo el elemento que deseo eliminar mediante su id y lo almaceno dentro de una variable
        let tablaEnCarrito = document.getElementById(`productoCarrito${productosEnCarrito.id}`)
        //Remuevo el elemento del DOM 
        tablaEnCarrito.remove()
        //Busco el producto/objeto dentro del array "productosEnCarrito" mediante su id y lo almaceno en una nueva variable
        let tablaEliminar = array.find((tabla) => tabla.id == productosEnCarrito.id)
        //Creo una nueva variable donde se almacene el indice en el que se encuentre el producto/objeto almacenado en la variable anterior
        let posicion = array.indexOf(tablaEliminar)
        //Elimino ese objeto/producto del array 
        array.splice(posicion,1)
        //Seteo nuevamente el LocalStorage con el objeto/producto ya eliminado 
        localStorage.setItem("carrito", JSON.stringify(array))
        //Calculo nuevamente el total del carrito
        calcularTotal(array)
        //establezco nuevamente en el icono del carrito la cantidad de productos que se encuentran en el mismo
        numeroCarrito(array)
        })
})
//Calculo el total del carrito
calcularTotal(array)
//establezco nuevamente en el icono del carrito la cantidad de productos que se encuentran en el mismo
numeroCarrito(array)
}

//FUNCTION AGREGAR TABLA
function agregarTabla(array){
    //Capturo los input del form 
    let modeloInput = document.getElementById("modeloInput")
    let tamanioInput = document.getElementById("tamanioInput")
    let precioImput = document.getElementById("precioImput")
    let selectQuillas = document.getElementById("selectQuillas")
    //Creo un nuevo objeto/producto mediante los datos ingresados en el input
    const tablaNueva = new tablas(array.length+1, modeloInput.value, tamanioInput.value, parseInt(precioImput.value),selectQuillas.value,"../img/Empty_wave_at_Banzai_Pipeline.jpeg","","")
    //lo sumo al array:
    array.push(tablaNueva)
    //lo sumo al Storage:
    localStorage.setItem("productos", JSON.stringify(array))
    //lo sumo al DOM
    cargarTablas(array)
    //reseteo el input
    modalCargarTabla.reset()
} 

//FUNCTION BUSCAR 
function buscar(buscado, array){
    //Filtro en el array aquellos objetos donde cuyos argumentos "modelo" o "largo" incluyan alguna letra o número buscado por el usuario
    //y los almaceno en una variable
    let busquedaArray = array.filter(
        (tabla)=> tabla.modelo.toLowerCase().includes(buscado) || tabla.largo.toLowerCase().includes(buscado)
    )
    
    busquedaArray.length == 0 ?
    //Si no hay ningun array filtrado en esa busqueda modificio el DOM y agrego el siguiente mensaje "No hay coincidencias con su búsqueda"
    (coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`, cargarTablas(busquedaArray)) 
    ://Si hay algun array filtrado modifico el DOM y cargo el mismo exclusivamente
    (coincidencia.innerHTML = "", cargarTablas(busquedaArray))
}

//FUCTION ORDENAR
function ordenarMenorMayor(array){

    const menorMayor = [].concat(array)
    //ordeno los objetos del array de menor a mayor
    menorMayor.sort((a,b) => a.precio - b.precio)
    //los cargo en el DOM en ese orden
    cargarTablas(menorMayor)
}
function ordenarMayorMenor(array){
    
    const mayorMenor = [].concat(array)
    //ordeno los objetos del array de mayor a menor
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    //los cargo en el DOM en ese orden
    cargarTablas(mayorMenor)
}

//FUNCTION FILTRAR POR TIPO
function filtrarTwinFin(array,tipo){
    const twinFin = [].concat(array) 
    //filtro los objetos del array por el "tipo" y los almaceno en una constante
    const result = twinFin.filter(tabla => tabla.tipo == tipo);
    //cargo en el DOM aquellos objetos filtrados
    cargarTablas(result)
}
function filtrarSingleFin(array,tipo){
    const singlefin = [].concat(array)
    const result = singlefin.filter(tabla => tabla.tipo == tipo);
    cargarTablas(result)
    
}
function filtrarMidLength(array,tipo){
    const midlength = [].concat(array)
    const result = midlength.filter(tabla => tabla.tipo == tipo);
    cargarTablas(result)
    
}
function filtrarThruster(array,tipo){
    const thruster = [].concat(array)
    const result = thruster.filter(tabla => tabla.tipo == tipo);
    cargarTablas(result)
    
}

// FUNCTION TOTAL
function calcularTotal(array){
    //sumo los argumento "precio" de aquellos objetos del array que se encuentren en el carrito
    let total = array.reduce((acc, productoCarrito)=>acc + productoCarrito.precio ,0)
    //si esa suma es igual a 0, modifico el DOM y en el modal del carrito se encuentra este mensaje "No hay productos en el carrito"
    total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito` :
    // si esa suma es distinta a 0
    precioTotal.innerHTML = `El total del carrito es <strong>${total}$USD</strong>`
}
//FUNCTION NUMERO CARRITO
function numeroCarrito(numeroEnCarrito){
    let carritoNumero = document.getElementById("carritoNumero")
    //establezo que el largo de mi parametro va a ser la sintaxis del elemento  
    carritoNumero.innerHTML = numeroEnCarrito.length
}
//FUNCTION FINALIZAR COMPRA 
function finalizarCompra(){
    //le muestro una alerta al usuario si quiere efectivamente realizar la compra
    Swal.fire({
        title: 'Está seguro de realizar la compra)',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    }).then((result)=>{
        //si el usuario confirma la compra
        if(result.isConfirmed){
            //le envío otra alerta
            Swal.fire({
                title: 'Compra realizada',
                icon: 'success',
                confirmButtonColor: 'green',
                text: `Muchas gracias por su compra ha adquirido nuestros productos. `,
                })
                //vacío la variable estructurada
                productosEnCarrito = []
                //visualizo nuevamente la cantidad de productos que se encuentran en el mismo
                numeroCarrito(productosEnCarrito)
                //remuevo de mi localStorage la llave "carrito"
                localStorage.removeItem("carrito")
        }//si el usuario confirma la compra
        else{
            //le envío otra alerta
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'info',
                text: `La compra no ha sido realizada! ATENCIÓN sus productos siguen en el carrito`,
                confirmButtonColor: 'green',
                timer:3500
            })
        }
    }
    )
}



/*EVENTOS*/
guardarTablaBtn.addEventListener("click", ()=>{
    //agrega la tabla ingresada al localStorage y DOM
    agregarTabla(productos)
})

//Visualiza las tablas 
verTablas.onclick = ()=>{cargarTablas(productos)}

//Oculta las tablas 
ocultarTablas.onclick = function(){
    tablasDeSurf.innerHTML =""
}

//Busca las coincidencia con los objetos y los visualiza 
buscador.addEventListener("input", ()=>{
buscar(buscador.value, productos)
})

selectOrden.addEventListener("change", ()=>{
if(selectOrden.value == 1){
    ordenarMayorMenor(productos)
}else if(selectOrden.value == 2){
    ordenarMenorMayor(productos)
}else{
    cargarTablas(productos)
}
})

selectTipo.addEventListener("change", ()=>{
if(selectTipo.value == 1){
    filtrarTwinFin(productos,"TWIN FIN")
}else if (selectTipo.value == 2){
    filtrarMidLength(productos,"MID LENGTH")
}else if (selectTipo.value == 3){
    filtrarSingleFin(productos,"SINGLE FIN")
}else if(selectTipo.value == 4){
    filtrarThruster(productos,"THRUSTER")
}else{
    cargarTablas(productos)
}
})

//Agrega los productos al carrito
botonCarrito.addEventListener("click", () =>{
    cargarProductosCarrito(productosEnCarrito)
})

//Manda las alertas al finalizar la compra
botonFinalizarCompra.addEventListener("click", ()=>{
    finalizarCompra()})
