// Aqui empieza el Ejercicio 1

let anio;
while (isNaN(anio)||anio <= 0) {
    anio = Number(prompt('Ingrese el año del vehiculo'))
    if (isNaN(anio) || anio <= 0) {
    alert("Error: debes ingresar un número válido.");
  }
}

let precio;
while (isNaN(precio)||precio <= 0) {
    precio = Number(prompt('Ingrese el precio del vehiculo'))
    if (isNaN(precio) || precio <= 0) {
    alert("Error: debes ingresar un precio válido.");
  }
}

const coche = {
    marca: prompt('Ingrese la marca del vehiculo'),
    modelo: prompt('Ingrese el modelo del vehiculo'),
    anio: anio,
    color: prompt('Ingrese el color del vehiculo'),
    estado: prompt('Ingrese el estado del vehiculo'),
    precio: precio,

    //Esto corresponde al ejercicio 2
    calcEdad: () => {
        const fechaActual= new Date()
        return `El auto tiene ${fechaActual.getFullYear() - coche.anio} años`
    }
}

document.getElementById('marca').innerHTML = `Marca: ${coche.marca}`
document.getElementById('modelo').innerHTML = `Modelo: ${coche.modelo}`
document.getElementById('anio').innerHTML = `Año: ${coche.anio}`
document.getElementById('color').innerHTML = `Color: ${coche.color}`
document.getElementById('estado').innerHTML = `Estado: ${coche.estado}`
document.getElementById('precio').innerHTML = `Precio: $${coche.precio}`
document.getElementById('edad').innerHTML = `${coche.calcEdad()}`



