// Menu desplegable

let menuLado = document.querySelector("#sideBarNav");

function cerrar() {
    menuLado.style.width = "0";
}

function abrir() {
    menuLado.style.width = "250px";
}

// Productos y funciones de carrito

let baseDatos;

fetch("./db/carrito.json")
    .then((producto) => {
        return producto.json();
    })
    .then((arregloDeProducto) => {
        baseDatos = arregloDeProducto
        console.log(baseDatos)
        arregloDeProducto.map((prod) =>
            $("#lista-prod").append(`
                            <div class='productos'>
            <div class='products' id='producto${prod.id}'>
            <img class='img' id='img${prod.id}' src='${prod.img}'>
            <p id='txt'>${prod.nombre} <br> 
            $${prod.precio}</p>
            </div>
        <button id='add${prod.id}' class='carrito' onClick='agregarAlCarrito(${prod.id})'><i class="producto__icon fas fa-cart-plus"></i></button>
            </div>`)
        )
    });

let carrito = JSON.parse(localStorage.getItem('carrito'));
let total = 0;

function agregarAlCarrito(id) {
    let productAdd = baseDatos.find(prod => prod.id === id);
    console.log(carrito);
    carrito.push(productAdd)
    localStorage.setItem('carrito', JSON.stringify(carrito))
};


if (!carrito) {
    carrito = []
};

function vaciarCarrito() {
    localStorage.clear()
    carrito = []
};