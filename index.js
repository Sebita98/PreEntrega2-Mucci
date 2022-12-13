const productos = [
    { nombre: "Botines", precio: 20000 },
    { nombre: "Palo de hockey", precio: 80000 },
    { nombre: "Raqueta", precio: 15000 },
    { nombre: "Antiparras", precio: 5000 },
];

const MARCA = "CASA DE DEPORTES"
const BIENVENIDO = ("¡Bienvenido a la " + MARCA + "!");

console.log(MARCA);
alert(MARCA);

class Cliente {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }

    toString() {
        return this.nombre + " " + this.apellido;
    }

}

let clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese Su Apellido").toLocaleUpperCase(), prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());

while ((clienteUno.nombre == "") || (clienteUno.apellido == "") || (clienteUno.correo == "")) {

    console.log("Debes ingresar todos los campos requeridos");
    alert("Debes ingresar todos los campos requeridos");

    clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese Su Apellido").toLocaleUpperCase(), prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());
}


let carrito = []

let seleccion = prompt("Hola desea comprar algun producto si/no");

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no");
    seleccion = prompt("Hola desea comprar un producto si/no")
}

if (seleccion == "si") {
    alert("Estos son los productos");
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
    alert("Gracias por venir");
}


while (seleccion != "no") {
    let producto = prompt("Agrega el producto que deseas a tu carrito");
    let precio = 0

    if (producto == "Botines" || producto == "Palo de hockey" || producto == "Raqueta" || producto == "Antiparras") {
        switch (producto) {
            case "Botines":
                precio = 20000;
                break;
            case "Palo de hockey":
                precio = 80000;
                break;
            case "Raqueta":
                precio = 15000;
                break;
            case "Antiparras":
                precio = 5000;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("¿Cuantos productos deseas llevar?"));

        carrito.push({ producto, unidades, precio });
    } else {
        alert("No tenemos ese producto");
    }

    seleccion = prompt("¿Quiere seguir comprando?");

    while (seleccion === "no") {
        
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`el total a pagar por su compra es: ${total}`);
alert("Gracias por la compra, hasta pronto");







