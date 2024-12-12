function verMas(producto) {
    // Definir los detalles de los productos
    const productos = {
        'Acarsolt': {
            descripcion: 'Es un acaricida con acción de contacto, ingestión e inhalación...',
            precio: '$XX.XX',
            cantidad: '1 Litro',
            dosis: '100 ml por 10L'
        },
        // Puedes agregar más productos aquí
    };

    // Obtener los detalles del producto seleccionado
    const detalles = productos[producto];

    // Rellenar el modal con la información del producto
    document.getElementById('modalTitulo').textContent = producto;
    document.getElementById('modalDescripcion').textContent = detalles.descripcion;
    document.getElementById('modalPrecio').textContent = 'Precio: ' + detalles.precio;
    document.getElementById('modalCantidad').textContent = 'Cantidad: ' + detalles.cantidad;
    document.getElementById('modalDosis').textContent = 'Dosis recomendada: ' + detalles.dosis;

    // Mostrar el modal
    document.getElementById('productoModal').style.display = 'block';
}

function cerrarModal() {
    // Ocultar el modal
    document.getElementById('productoModal').style.display = 'none';
    document.getElementById('volver').addEventListener('click', function() {
        window.location.href = 'catalogo.html'; 
    });
}
