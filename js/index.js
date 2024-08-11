document.addEventListener('DOMContentLoaded', () => {
    pintarProductos(productos);
    pintarCarrito(carrito);
    actualizarTotalCarrito(carrito);
});

document.addEventListener('DOMContentLoaded', function() {
    const btnBorrarTodo = document.getElementById('btn-borrar-todo');
    const carritoContenedor = document.getElementById('carrito-contenedor');
    const precioTotal = document.getElementById('precioTotal');

  
    btnBorrarTodo.addEventListener('click', function() {
    
     carritoContenedor.innerHTML = '';
  
     precioTotal.textContent = '0';

     localStorage.removeItem('carrito');
     carrito.map((p)=> {
       p.cantidad = 1
      })
      carrito = []
      actualizarContadorCarrito()
    });
  });

  function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContenedor = document.getElementById('carrito-contenedor');
    const precioTotal = document.getElementById('precioTotal');
    

    carritoContenedor.innerHTML = ''; 

    let total = 0;
    carrito.forEach(item => {
      
      carritoContenedor.innerHTML += `<div>${item.nombre} - $${item.precio}</div>`;
      total += item.precio;
    });

    precioTotal.textContent = total.toFixed(2);

    actualizarContadorCarrito();
  }
  function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contador-carrito');
      let cantidadCarrito = 0
      if(carrito == []){
        cantidadCarrito = carrito.map((p)=>{
          cantidadCarrito + p.cantidad
       })
      }

      contadorCarrito.textContent = cantidadCarrito
}
  cargarCarrito();





