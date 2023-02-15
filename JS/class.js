/*Class Constructora*/
class tablas{
    constructor(id,modelo,largo,precio, tipo,imagen1,imagen2,imagen3){
        this.id = id
        this.modelo = modelo.toUpperCase()
        this.largo = parseInt(largo)
        this.precio = parseInt(precio)
        this.tipo = tipo
        this.imagen1 = imagen1
        this.imagen2 = imagen2
        this.imagen3 = imagen3
    }
}

const tabla1 = new tablas("1","sunstone","5'2",500,"twin fin","../img/twin-fins/album sunstone 5.2 (2).jpg","../img/twin-fins/album sunstone (3).jpg","../img/twin-fins/album sunstone (4).webp")
const tabla2 = new tablas("2","darkness","7'3",750,"mid length","../img/mid-length/darkness.webp","../img/mid-length/darkness1.webp","../img/mid-length/darkness2.webp")
const tabla3 = new tablas("3","lightbender","6'2",950,"twin fin","../img/twin-fins/lightbender.jpg","../img/twin-fins/ligh.jpg","../img/twin-fins/lightbender2.jpg")
const tabla4 = new tablas("4","twinsman","6'0",630,"twin fin","../img/twin-fins/twinsman.jpg","../img/twin-fins/twinsman1.jpg","../img/twin-fins/twinsman2.jpg")
const tabla5 = new tablas("5","bandida","5'9",430,"thruster","../img/thruster/surfboards_Bandida.png","../img/thruster/boards_Bandida_bottom.png","")
const tabla6 = new tablas("6","the medina","5'9",475,"thruster","../img/thruster/Surfboards_TheMedina4.png","../img/thruster/boards_medina_n4.png","")
const tabla7 = new tablas("7","the game","5'6",480,"thruster","../img/thruster/surfboards_cabianca_TheGaMe.png","../img/thruster/Surfboards_TheGAME.png","")
const tabla8 = new tablas("8","stance","9'0",950,"single fin","../img/single-fins/single-fin.png","../img/single-fins/single-fin2.png","")
const tabla9 = new tablas("9","big continental","9'4",1000,"single fin","../img/single-fins/singlefin.png","../img/single-fins/singlefin2.png","")
const tabla10 = new tablas("10","firewire sunday","7'3",1100,"mid length","../img/mid-length/midfire.png","../img/mid-length/midfire2.png","")
const tabla11 = new tablas("11","big continental","9'6",1250,"single fin","../img/single-fins/bingcontinental.png","../img/single-fins/bingcontinental2.png","")
const tabla12 = new tablas("12","channel islands m23","6'6",975,"mid length","../img/mid-length/midlength.png","../img/mid-length/midlength2.png","")

/* const productos = [tabla1,tabla2,tabla3,tabla4,tabla5,tabla6,tabla7,tabla8,tabla9,tabla10,tabla11,tabla12] */

//array de objetos:
let productos = []

if(localStorage.getItem("productos")){

    productos = JSON.parse(localStorage.getItem("productos"))
    
}else{
    productos.push(tabla1,tabla2,tabla3,tabla4,tabla5,tabla6,tabla7,tabla8,tabla9,tabla10,tabla11,tabla12)
    localStorage.setItem("productos", JSON.stringify(productos))
}