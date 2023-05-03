let carrito = [];




function agregarCarrito(nombre, precio) {
    let producto = {
        nombre: nombre,
        precio: precio,
    };
    carrito.push(producto);
    console.log(carrito);
    alert(nombre + " fue agregado al carrito")
}


const botonCarrito = document.getElementById("boton-carrito");

botonCarrito.addEventListener("click", mostrarCarrito)

function mostrarCarrito() {
    let productosCarrito = "";
    let precioTotal = 0;
    carrito.forEach(function (producto) {
        productosCarrito += producto.nombre + " - $" + producto.precio + "\n";
        precioTotal += producto.precio
    })


    alert("Tu carrito:\n" + productosCarrito + "\n Precio total: $" + precioTotal);
}





