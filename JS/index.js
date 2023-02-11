/* VARIABLES */
let twinFinButton = document.getElementById("twinFinButton")

/*tablas*/
let sunstone52 = document.getElementById("sunstone52")
let darkness73 = document.getElementById("darkness73")
let lightbender62 = document.getElementById("lightbender62")
let twinsman60 = document.getElementById("twinsman60")
let bandida59 = document.getElementById("bandida59")
let medina59 = document.getElementById("medina59")
let thegame56 = document.getElementById("thegame56")
let stance90 = document.getElementById("stance90")
let bigcontinental94 = document.getElementById("bigcontinental94")
let bigcontinental96 = document.getElementById("bigcontinental96")
let m23660 = document.getElementById("m23660")


/*Class Constructora*/
class tablas{
    constructor(id,modelo,largo,precio, tipo){
        this.id = id
        this.modelo = modelo
        this.largo = parseInt(largo)
        this.precio = parseInt(precio)
        this.tipo = tipo
    }
}

const productos = []
productos.push(new tablas("sunstone52","sunstone","5'2",500,"twin fin"))
productos.push(new tablas("darkness73","darkness","7'3",750,"mid length"))
productos.push(new tablas("lightbender62","lightbender","6'2",950,"twin fin"))
productos.push(new tablas("twinsman60","twinsman","6'0",630,"twin fin"))
productos.push(new tablas("bandida59","bandida","5'9",430,"thruster"))
productos.push(new tablas("medina59","the medina","5'9",475,"thruster"))
productos.push(new tablas("thegame56","the game","5'6",480,"thruster"))
productos.push(new tablas("stance90","stance","9'0",950,"single fin"))
productos.push(new tablas("bigcontinental94","big continental","9'4",1000,"single fin"))
productos.push(new tablas("sunday73","firewire sunday","7'3",1100,"mid length"))
productos.push(new tablas("bigcontinental96","big continental","9'6",1250,"single fin"))
productos.push(new tablas("m23660","channel islands m23","6'6",975,"mid length"))










/*FUNCIONES*/

/*Filtrar twin fin*/
/* const filtrarTwinFins = productos.filter(productos => productos.tipo == "twin fin")
 */




/*EVENTOS*/
twinFinButton.addEventListener("click",productos.filter(productos => productos.tipo == "twin fin"))
console.log()
