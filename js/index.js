document.addEventListener('DOMContentLoaded', () => {
    pintarProductos(productos);
    pintarCarrito(carrito);
    actualizarTotalCarrito(carrito);
});

document.addEventListener('DOMContentLoaded', function() {
    const btnBorrarTodo = document.getElementById('btn-borrar-todo');
    const carritoContenedor = document.getElementById('carrito-contenedor');
    const precioTotal = document.getElementById('precioTotal');
    const contadorCarrito = document.getElementById('contador-carrito');

    function actualizarContadorCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        contadorCarrito.textContent = carrito.length; 
    }
  
    btnBorrarTodo.addEventListener('click', function() {
    
     carritoContenedor.innerHTML = '';
  
     precioTotal.textContent = '0';

     localStorage.removeItem('carrito');
  

    });
  });

  function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    
    carritoContenedor.innerHTML = ''; 

    let total = 0;
    carrito.forEach(item => {
      
      carritoContenedor.innerHTML += `<div>${item.nombre} - $${item.precio}</div>`;
      total += item.precio;
    });

    precioTotal.textContent = total.toFixed(2);

    actualizarContadorCarrito();
  }

  btnBorrarTodo.addEventListener('click', function() {
    
    carritoContenedor.innerHTML = '';

   
    precioTotal.textContent = '0';

 
    localStorage.removeItem('carrito');

  
    actualizarContadorCarrito();
  });

  
  cargarCarrito();




