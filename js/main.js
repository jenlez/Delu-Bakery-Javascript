let ingreseNombre = prompt ("Ingrese su nombre");
alert("Bienvenid@ "+ ingreseNombre + " para ver nuestras promociones del dia acceda a su cuenta.")

let usuario1 = "jennifer"
let contrasenia1= 1234

let usuario2 = "angela"
let contrasenia2 = 1234

let usuario3 = "juan"
let contrasenia3 = 1234

let ingreseUsuario = prompt("Ingrese su usuario").toLowerCase()
let ingreseContrasenia = prompt("Ingrese Contraseña").toLowerCase()

if (ingreseUsuario == usuario1 && ingreseContrasenia == contrasenia1 ||
    ingreseUsuario == usuario2 && ingreseContrasenia == contrasenia2 ||
    ingreseUsuario == usuario3 && ingreseContrasenia == contrasenia3 ) {
    alert ("Acceso Correcto " + ingreseUsuario)
}else {
    alert ("Acceso Incorrecto")
}

alert ("Ingrese la promo que desea llevar, para salir ingrese 0")

let seleccionProductos = Number(prompt (
    "1-Medialunas X 12 Unidades $880      2-Croissant Francés X 6 Unidades $1080          3-Chipa x 6 unidades $750           4-Palitos de queso x 8 unidades $820         0-Salir"))
let seleccionarCantidad
let total = 0

function cantidad(cant,precio) {
    return cant*precio
    
}
while (seleccionProductos != 0 ) {
    switch (seleccionProductos) {
        case 1:
            seleccionarCantidad= Number(prompt("el producto seleccionado es Medialunas X 12 Unidades, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1080)
            break;
        case 2:
            seleccionarCantidad= Number(prompt("el producto seleccionado es Croissant Francés X 6 Unidades, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1080)
            break;
        case 3:
            seleccionarCantidad= Number(prompt("el producto seleccionado es Chipa x 6 unidades, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1080)
            break;
        case 4:
            seleccionarCantidad= Number(prompt("el producto seleccionado es Palitos de queso x 8 unidades , indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1080)
            break;
    
        default: 
            break;
    }
    seleccionProductos = Number(prompt (
        "1-Medialunas X 12 Unidades $880      2-Croissant Francés X 6 Unidades $1080          3-Chipa x 6 unidades $750           4-Palitos de queso x 8 unidades $820         0-Salir"))
}

alert("el total de la compra es de: " + total)

metodoDePago()

function metodoDePago() {
    let metodo = prompt("ingrese el metodo de pago, 1- tarjeta o 2-efectivo" )
    if (metodo == "tarjeta"||"1") {
      total *= 1.1
      alert("El total es: "+ total);
    }else if ( metodo == "efectivo"||"2") {
      total -= 200
      alert("Tienes un descuento de $200, el total es: " + total)
    }   
    
}

alert ("Gracias por tu compra, vuelve pronto.")










