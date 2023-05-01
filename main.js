let carrito = [];

function agregarCarrito(nombre, precio) {
    let producto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(producto);
    console.log(carrito);
    alert(nombre + " fue agregado al carrito")
}


function mostrarCarrito() {
    let productosCarrito = "";
    let precioTotal = 0;
    for (let i = 0; i < carrito.length; i++) {
        productosCarrito += carrito[i].nombre + " - $" + carrito[i].precio + "\n";
        precioTotal += carrito[i].precio;
    }
    alert("Tu carrito:\n" + productosCarrito + "\n Precio total: $" + precioTotal);
}
