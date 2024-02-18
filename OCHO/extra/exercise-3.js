const baseUrlPedidos = 'http://localhost:3000/orders';
const baseUrlProductos = 'http://localhost:3000/products';

async  function getData(url) {
    const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        };

async function obtenerPedidosyProductos (){
    try{
        const pedidos = await getData(baseUrlPedidos);
    pedidos.sort((a, b)=> new Date(b.date) - new Date(a.date));

    for (let i = 0; i < pedidos.length; i++){
const cantidadPedidos = pedidos[i].id;
const productos = pedidos[i].products;
for (let producto of productos){
    const idProducto = producto.productId;
    const cantProducto = producto.quantity;
    const urlConIdProductos = baseUrlProductos + idProducto;
    const productoData = await getData(urlConIdProducto);
    console.log(`Nombre del producto: ${productoData.name}, Cantidad: ${producto.quantity}`);
            }
        }
    } catch (error) {
        console.error('There was a problem with processing orders:', error);
    }
}
