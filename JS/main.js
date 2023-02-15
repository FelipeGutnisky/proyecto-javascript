/* VARIABLES */
let twinFinButton = document.getElementById("twinFinButton")
let tablasDeSurf = document.getElementById("tablasDeSurf")

/* AGREGO MI ARRAY AL HTML*/
function cargarTablas(array){
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
    <div class="d-flex align align-items-center ">
        <div class="text-center">
            <h2 class="fw-light subtitulo-2 mt-2 text-uppercase">${tabla.modelo} ${tabla.largo}</h2>
            <p class="fw-bold">$${tabla.precio} USD</p>
        </div>
        <a href="#" class="ms-4"><button class="btn btn-primary btn-sm">Comprar</button></a>
    </div>
</div>`
    tablasDeSurf.appendChild(nuevaTabla)
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
        <div class="d-flex align align-items-center ">
            <div class="text-center">
                <h2 class="fw-light subtitulo-2 mt-2 text-uppercase">${tabla.modelo} ${tabla.largo}</h2>
                <p class="fw-bold">$${tabla.precio} USD</p>
            </div>
            <a href="#" class="ms-4"><button class="btn btn-primary btn-sm">Comprar</button></a>
        </div>
    </div>` 
    tablasDeSurf.appendChild(nuevaTabla)
    }
}}

cargarTablas(productos)






/*FUNCIONES*/

/*Filtrar twin fin*/





/*EVENTOS*/
