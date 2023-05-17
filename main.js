class producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;

    }
}


const S22 = new producto(1, "Samsung S22", 145_000, "img/S22.JPG");
const S21 = new producto(2, "Samsung S21 FE", 150_000, "img/S21FE.png");
const S23 = new producto(3, "Samsung S23", 200_000, "img/S23.JPG");
const S23plus = new producto(4, "Samsung 23+", 225_000, "img/S23+.JPG");


const productos = [S22, S21, S23, S23plus];

let carrito = [];

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}



const contenedorProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-6", "col-md-6", "col-xs-12", "align-content-center");
        card.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <button class="btn btn-primary" id="boton-${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
        </div>
    </div>`
        contenedorProductos.appendChild(card);

        const botonAgregar = document.getElementById(`boton-${producto.id}`);
        botonAgregar.addEventListener("click", () => {
            agregarCarrito(producto.id);
        })
    })
}

mostrarProductos();

//Con funcion agregar carrito verifico si el producto ya esta enel carrito si ya se encauntra se suma otro si no se encuantra se agrega
function agregarCarrito(id) {
    const productoExistente = carrito.find(producto => producto.id === id)
    //SI encuentra el producto va a ser TRUE y se va a ejecutar el IF en caso contrario el ELSE
    if (productoExistente) {
        productoExistente.cantidad++;
        Swal.fire(
            'Agregaste el producto al carrito',
            '',
            'success'
        )
    } else {
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        Swal.fire(
            'Agregaste el producto al carrito',
            '',
            'success'
        )
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito()
}



//BOTONES PARA VER CARRITO EN PANTALLA 
const botonCarrito = document.getElementById("boton-carrito");
const contenedorCarrito = document.getElementById("contenedorCarrito");

botonCarrito.addEventListener("click", () => {
    mostrarCarrito();
})



const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-6", "col-md-6", "col-xs-12");
        card.innerHTML = `
                            <div class="card" style="width: 10rem;">
                                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                        <p class="card-text">$${producto.precio} x${producto.cantidad}</p>
                                        <button class="btn btn-danger" id="eliminar-${producto.id}"> Eliminar del carrito</button>
                                        <button class="btn btn-danger" id="agregar-${producto.nombre}"> + </button>
                                        <button class="btn btn-danger" id="restar-${producto.nombre}"> - </button>
                                </div>
                            </div> `
        contenedorCarrito.appendChild(card);

        const botonEliminar = document.getElementById(`eliminar-${producto.id}`);
        botonEliminar.addEventListener("click", eliminarProducto);

        const botonAgregar = document.getElementById(`agregar-${producto.id}`);
        botonEliminar.addEventListener("click", agregarProducto);

        const botonRestar = document.getElementById(`restar-${producto.id}`);
        botonEliminar.addEventListener("click", restarProducto);
    })
}

function eliminarProducto(id) {
    const index = carrito.findIndex(producto => producto.id === id);
    carrito.splice(index, 1);
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}
function agregarProducto(nombre) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));

    const producto = carrito.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
    }
}
function restarProducto(nombre) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));

    const producto = carrito.find(producto => producto.nombre === nombre);
    if (producto) {
        if (producto.quantity > 1) {
            producto.quantity--;
        } else {
            carrito = carrito.filter(producto => producto.nombre !== nombre);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        updateCart();
    }





}


const vaciarCarrito = document.getElementById("vaciar-carrito");
vaciarCarrito.addEventListener("click", eliminarCarrito);

function eliminarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();

}




