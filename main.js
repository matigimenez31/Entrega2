const productos = [
    { nombre: "Procesador", precio: 40000 },
    { nombre: "Ram", precio: 36540 },
    { nombre: "Motherboard", precio: 25000 },
    { nombre: "PlacaDeVideo", precio: 120000 },
    { nombre: "Fuente", precio: 16400 },
    { nombre: "DiscoDuro", precio: 7900 },
    { nombre: "DiscoSolido", precio: 9300 },
    { nombre: "Gabinete", precio: 23500 },
];

let preciosProductos = [];
let productosSeleccionados = [];

let respuesta = confirm(`¿Desea hacer alguna compra?`);
if (respuesta) {
    do {
        let filtroPrecio = parseInt(prompt(`Ingrese el precio máximo de los productos que desea ver:`));
        let productosFiltrados = productos.filter(producto => producto.precio <= filtroPrecio);
        
        productosFiltrados.forEach(producto => {
            let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} que desea comprar:`));
            if (cantidad > 0) {
                preciosProductos.push(producto.precio * cantidad);
                productosSeleccionados.push(`${producto.nombre} (x${cantidad})`);
            }
        });
        
        if (preciosProductos.length === 0) {
            alert(`No ha seleccionado ningún producto.`);
        } else {
            let costoTotal = preciosProductos.reduce((a, b) => a + b, 0);
            let mensaje = `El costo total de sus productos es $${costoTotal.toFixed(2)}. Ha seleccionado los siguientes productos: ${productosSeleccionados.join(", ")}`;
            alert(mensaje);
        }
        respuesta = confirm(`¿Desea hacer otra compra?`);
        preciosProductos = [];
        productosSeleccionados = [];
    } while (respuesta);
} 
alert(`Muchas gracias, vuelva pronto!`);




