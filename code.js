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

if (!carrito) {
    carrito = []
};

carrito && carrito.forEach(product => {
    console.log(product);
    $("#productos-carrito").append(`
    <div class='producto'>
    <span class='nombre-producto'>${product.nombre} $${product.precio}</span><img class='img-preview' src='${product.img}'>
    <button onClick="borrarCarrito(${product.id})" id='borrar-carrito-btn'><i id='borrar-carrito' class="fas fa-times"></i></button>
    </div>
    `);
});

function actualizarCarrito() {
    $('#productos-carrito').html('');
    carrito && carrito.forEach(product => {
        $("#productos-carrito").append(`
    <div class='producto'>
    <span class='nombre-producto'>${product.nombre} $${product.precio}</span><img class='img-preview' src='${product.img}'>
    <button onClick="borrarCarrito(${product.id})" id='borrar-carrito-btn'><i id='borrar-carrito' class="fas fa-times"></i></button>
    </div>
    `);
    })
};



// COMO HACER PARA Q NO SE BORRE EL TOTAL CUANDO SE RECARGA
function agregarAlCarrito(id) {
    let productAdd = baseDatos.find(prod => prod.id === id);
    console.log(carrito);
    carrito.push(productAdd);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    total = total + productAdd.precio
    localStorage.setItem('total', total);
    document.getElementById('total').innerHTML = ' / Total: $' + total;
    actualizarCarrito();
};

function borrarCarrito(id) {
    let productAdd = baseDatos.find(prod => prod.id === id);
    let productRemove = carrito.findIndex(product => product.id === id);
    carrito.splice(productRemove, 1);
    total = total - productAdd.precio
    document.getElementById('total').innerHTML = ' / Total: $' + total;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
};


function vaciarCarrito() {
    localStorage.removeItem('carrito');
    total = 0;
    document.getElementById('total').innerHTML = ' / Total: $' + total;
    carrito = [];
    actualizarCarrito();
};

$(document).ready(function() {
    total = localStorage.getItem(total);
});