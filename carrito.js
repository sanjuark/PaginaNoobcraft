$(document).ready(function() {
    carrito2 = JSON.parse(localStorage.getItem("carrito"));
    carrito2 && carrito2.forEach(productAdd => {
        console.log(productAdd);
        $("#productos-carrito").append(`
        <div class='producto'>
        <span class='nombre-producto'>${productAdd.nombre} $${productAdd.precio}</span><img class='img-preview' src='${productAdd.img}'>
        <button onClick="borrarCarrito(${productAdd.id})" id='borrar-carrito-btn'><i id='borrar-carrito' class="fas fa-times"></i></button>
        </div>
        `);
    });
});