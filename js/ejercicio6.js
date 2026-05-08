const libro1 = {
    titulo: 'Harry Potter',
    autor: 'J. K. Rowling',
    genero: 'Fantasia',
    anioPublicacion: 1997
}
const libro2 = {
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    genero: 'Novela',
    anioPublicacion: 1605
}
const libro3 = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupery',
    genero: 'Literatura infantil',
    anioPublicacion: 1943
}
const libro4 = {
    titulo: 'Cien años de Soledad',
    autor: 'Gabriel Garcia Marquez',
    genero: 'Novela',
    anioPublicacion: 1967
}
const libro5 = {
    titulo: 'El Señor de los Anillos',
    autor: 'J.R.R. Tolkien',
    genero: 'Literatura Fantastica',
    anioPublicacion: 1954
}

const librosTotales = []

//Guardo los libros en el Array vacio
librosTotales.push(libro1, libro2, libro3, libro4, libro5)
console.log(librosTotales)

//Muestro por pantalla los libros en una lista desordenada
document.getElementById('lista').innerHTML = librosTotales.map(libro => `<li>${libro.titulo} - ${libro.autor} - ${libro.anioPublicacion} - ${libro.genero}</li>`).join('')