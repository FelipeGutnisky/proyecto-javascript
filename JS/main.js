/* CAPTURAS DEL DOM */
let twinFinButton = document.getElementById("twinFinButton")
let singleFinButton = document.getElementById("singleFinButton")
let midLengthButton = document.getElementById("midLengthButton")
let thrusterButton = document.getElementById("thrusterButton")
let tablasDeSurf = document.getElementById("tablasDeSurf")
let modalBodyCarrito = document.getElementById("modalBodyCarrito")
let guardarTablaBtn = document.getElementById("guardarTablaBtn")
let verTablas = document.getElementById("verTablas")
let ocultarTablas = document.getElementById("ocultarTablas")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
let selectTipo = document.getElementById("selectTipo")
/*FUNCIONES*/
/* AGREGO MI ARRAY AL HTML*/
function cargarTablas(array){
    
    tablasDeSurf.innerHTML = ""
    
for(const tabla of array){
    if(tabla.imagen3 != ""){
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
    tablasDeSurf.appendChild(nuevaTabla)
    
    let agregarBtn = document.getElementById(`agregarBtn${tabla.id}`)
    agregarBtn.addEventListener("click", ()=>{
        agregarAlCarrito(tabla)
    })
    
    }else if(tabla.imagen3 == ""){
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
    })
}else if(tabla.imagen2 == "" & tabla.imagen3 == ""){
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
    })

}
}}




//CONDICONAL CARRITO
let productosEnCarrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)
}

//AGREGAR AL CARRITO
function agregarAlCarrito(tabla){
    console.log(`La tabla ${tabla.modelo} de largo ${tabla.largo} ha sido agregada al carrito. Vale ${tabla.precio}`)
    
    productosEnCarrito.push(tabla)
    console.log(productosEnCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

//FUNCTION AGREGAR TABLA
function agregarTabla(array){
    let modeloInput = document.getElementById("modeloInput")
    let tamanioInput = document.getElementById("tamanioInput")
    let precioImput = document.getElementById("precioImput")
    let selectQuillas = document.getElementById("selectQuillas")
    /* let subirImagen = document.getElementById("subirImagen") */
    
    const tablaNueva = new tablas(array.length+1, modeloInput.value, tamanioInput.value, parseInt(precioImput.value),selectQuillas.value,"../img/Empty_wave_at_Banzai_Pipeline.jpeg","","")
    console.log(tablaNueva)
    //sumarlo a estanteria:
    array.push(tablaNueva)
    console.log(array)
    //sumarlo también al Storage:
    localStorage.setItem("productos", JSON.stringify(array))
    cargarTablas(array)
    //reset input
    modeloInput.value = ""
    tamanioInput.value = ""
    precioImput.value = ""
    selectQuillas.value = ""
    
}

//FUNCTION BUSCAR 
function buscar(buscado, array){
    let busquedaArray = array.filter(
        (tabla)=> tabla.modelo.toLowerCase().includes(buscado) || tabla.largo.toLowerCase().includes(buscado)
    )
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
        cargarTablas(busquedaArray)
    }else{
        coincidencia.innerHTML = ""
        cargarTablas(busquedaArray)
    }
}

//FUCTION ORDENAR
function ordenarMenorMayor(array){
    
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.precio - b.precio)
    cargarTablas(menorMayor)
}
function ordenarMayorMenor(array){
    
    const mayorMenor = [].concat(array)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    cargarTablas(mayorMenor)
}

//FUNCTION FILTRAR POR TIPO
function filtrarTwinFin(array,tipo){
    const twinFin = [].concat(array) 
    const result = twinFin.filter(tabla => tabla.tipo == tipo);
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

/*EVENTOS*/
guardarTablaBtn.addEventListener("click", ()=>{
    agregarTabla(productos)}
)

verTablas.onclick = ()=>{cargarTablas(productos)}

ocultarTablas.onclick = function(){
    tablasDeSurf.innerHTML =""
}

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

