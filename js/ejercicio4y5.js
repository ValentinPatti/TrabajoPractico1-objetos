//Aqui comienza el Ejercicio 4
const empleado1 = {
    nombre: prompt('Ingrese el nombre del primer empleado: '),
    apellido: prompt('Ingrese el apellido del primer empleado: '),
    dni: Number(prompt('Ingrese el DNI del primer empleado: ')),
    direccion: prompt('Ingrese la direccion del primer empleado: '),
    salarioMensual: Number(prompt('Ingrese el salario mensual del primer empleado: ')),
    //Aqui empieza el Ejercicio 5
    sueldoXHs: Number(prompt('Ingrese el valor de las horas: ')),
    precioXHs: Number(prompt('Ingrese el precio por hora: ')),

    salarioxMes: function(){
        const salarioCalculado = this.sueldoXHs * 160
        return salarioCalculado
    }
}

const empleado2 = {
    nombre: prompt('Ingrese el nombre del segundo empleado: '),
    apellido: prompt('Ingrese el apellido del segundo empleado: '),
    dni: Number(prompt('Ingrese el DNI del segundo empleado: ')),
    direccion: prompt('Ingrese la direccion del segundo empleado: '),
}
let empleados = []
document.getElementById('nombreCompleto').innerHTML = `Empleado: ${empleado1.apellido}, ${empleado1.nombre} `
document.getElementById('dni').innerHTML = `DNI: ${empleado1.dni}`
document.getElementById('direccion').innerHTML = `Direccion: ${empleado1.direccion}`
document.getElementById('salario').innerHTML = `Salario Mensual: ${empleado1.salarioMensual}`
document.getElementById('salarioCalculado').innerHTML = `El salario mensual calculado es de: $ ${empleado1.salarioxMes()}`

empleados.push(empleado1)
empleados.push(empleado2)
console.log(empleados)

