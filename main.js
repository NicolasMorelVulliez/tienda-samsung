let carrito = [];
const botonAgregarS22 = document.getElementById("boton-agregar-s22");
const botonAgregarS21 = document.getElementById("boton-agregar-s21");
const botonAgregarS23 = document.getElementById("boton-agregar-s23");
const botonAgregarS23plus = document.getElementById("boton-agregar-s23+");

botonAgregarS22.addEventListener("click", () => { agregarCarrito("Samsung S22", 145_000) });
botonAgregarS21.addEventListener("click", () => { agregarCarrito("Samsung S21", 150_000) });
botonAgregarS23.addEventListener("click", () => { agregarCarrito("Samsung S23", 200_000) });
botonAgregarS23plus.addEventListener("click", () => { agregarCarrito("Samsung S23+", 225_000) });




function agregarCarrito(nombre, precio) {
    const producto = {
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





