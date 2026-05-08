let precio
while (isNaN(precio)||precio <= 0) {
    precio = Number(prompt('Ingrese el precio del producto: '))
    if (isNaN(precio) || precio <= 0) {
    alert("Error: debes ingresar un precio válido.");
  }
}
let porcDescuento
while (isNaN(porcDescuento)||porcDescuento <= 0 ) {
    porcDescuento = Number(prompt('Ingrese el porcentaje del producto: '))
    if (isNaN(porcDescuento) || porcDescuento < 0 || porcDescuento > 100) {
    alert("Error: debes ingresar un porcentaje válido.");
  }
}

const producto = {
    nombre: prompt('Ingrese el nombre del producto: '),
    marca: prompt('Ingrese la marca del producto: '),
    descripcion: prompt('Describa al producto: '),
    precio: precio,
    porcDescuento: porcDescuento,

    calcularDescuento: function() {
        const nuevoPrecio = (this.precio * this.porcDescuento)/100
        return nuevoPrecio
    } 
}

document.getElementById('nombre').innerHTML = `<strong>Nombre:</strong> ${producto.nombre}`
document.getElementById('marca').innerHTML = `<strong>Marca:</strong> ${producto.marca}`
document.getElementById('descripcion').innerHTML = `<strong>Descripcion:</strong> ${producto.descripcion}`
document.getElementById('precio').innerHTML = `<strong>Precio:</strong> $${producto.precio}`
document.getElementById('porcDescuento').innerHTML = `<strong>Descuento de:</strong> %${producto.porcDescuento}`
document.getElementById('descuento').innerHTML = `<strong>El precio del producto con el descuento aplicado es de:</strong> $${producto.calcularDescuento()}`