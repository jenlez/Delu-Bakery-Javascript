//Desafío Arrays

class producto {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const panaderia = []
panaderia.push(new producto(1,"Chipa", "10 unidades aprox (250 gr) 250gr", 550))
panaderia.push(new producto(2,"Pan de campo", "Peso aproximado 500gr", 470))
panaderia.push(new producto(3,"Pan molde", "Peso aproximado 650gr", 540))

class factura{
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const facturas = []
facturas.push(new factura(4,"Roll de canela", "x1 unidad", 420))
facturas.push(new factura(5,"Medialunas", "x6 unidades", 600))

class torta {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const tortas = []
tortas.push(new torta(6,"Brownie", "Porcion con nuez o ciruela", 290))
tortas.push(new torta(7,"Chocotorta", "Porcion con chocolate rallado", 640))

const carrito = []

alert("Hola, Bienvenido a Delu Bakery - Panaderia artesanal")

let seleccion = prompt("Desea ordenar algun producto el dia de hoy? \n porfavor ingresa si o no")

while(seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("Desea ordenar algo, \n Si o no")
}

if(seleccion == "si") {
    alert("A continuación nuestros productos, puedes seleccionarlos por nombre o numero de lista");
    let seccionPanaderia = panaderia.map((orden) => orden.id + " - " + orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    let seccionFacturas = facturas.map((orden) =>  orden.id + " - " +  orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    let seccionTortas = tortas.map((orden) =>  orden.id + " - " +  orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    alert("PANADERIA \n" + seccionPanaderia.join("\n") + "\n" + "\n FACTURAS \n" + seccionFacturas.join("\n") + "\n" + "\n TORTAS \n" + seccionTortas.join("\n"));

    console.log("PANADERIA \n" + seccionPanaderia.join("\n") + "\n" + "\n FACTURAS \n" + seccionFacturas.join("\n") + "\n" + "\n TORTAS \n" + seccionTortas.join("\n"));

} else if (seleccion == "no") {
    alert("Gracias por venir, hasta pronto!!")
}

const orden = Array.prototype.concat(panaderia, facturas, tortas)

while(seleccion = "si" && seleccion != "no") {
    let prod = prompt("Agrega un producto a tu carrito \n nombre o numero de lista").toUpperCase()
    let precio = 0
    
    for(const i in orden) {
        if(prod == orden[i].nombre || prod == orden[i].id) {
            precio = Number(orden[i].precio)
        } //else if(prod !== orden[i].nombre) {
        //     alert("No tenemos ese producto") 
        // }
    }

    let unidades = Number(prompt("Cuantas unidades quiere llevar?"))
    carrito.push({prod, unidades, precio})
    
    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no") {
        alert("Gracias por la compra, Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            alert(`Producto: ${carritoFinal.prod},\nUnidades: ${carritoFinal.unidades},\nTotal a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`)
            console.log(`Producto: ${carritoFinal.prod}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    } if (seleccion != "si" && seleccion != "no") {
        alert("Por favor ingresa si o no")
        seleccion = prompt("Desea seguir comprando?")
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: $${total}`)
console.log(`El total a pagar por su compra es: $${total}`
)