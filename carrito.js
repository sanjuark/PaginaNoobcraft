let carrito2 = JSON.parse(localStorage.getItem("carrito"));

$(document).ready(function() {
    carrito2 && carrito2.forEach(product => {
        console.log(product);
        $("#productos-carrito").append(`
        <div class='producto'>
        <span class='nombre-producto'>${product.nombre} $${product.precio}</span><img class='img-preview' src='${product.img}'>
        <button onClick="borrarCarrito(${product.id})" id='borrar-carrito-btn'><i id='borrar-carrito' class="fas fa-times"></i></button>
        </div>
        `);
    });
});

function actualizarCarrito() {
    carrito2 && carrito2.forEach(product => {
        $('#productos-carrito').html('');
        $("#productos-carrito").append(`
    <div class='producto'>
    <span class='nombre-producto'>${product.nombre} $${product.precio}</span><img class='img-preview' src='${product.img}'>
    <button onClick="borrarCarrito(${product.id})" id='borrar-carrito-btn'><i id='borrar-carrito' class="fas fa-times"></i></button>
    </div>
    `);
    })
};