function usuario(nombreUsuario, contrasenia, fechaCreacion) {
  ((this.nombreUsuario = nombreUsuario),
    (this.contrasenia = contrasenia),
    (this.fechaCreacion = fechaCreacion));
}

function contacto(nomyApe, telefono, direccion, email) {
  ((this.nomyApe = nomyApe),
    (this.telefono = telefono),
    (this.direccion = direccion),
    (this.email = email));
}

const usuarios = [new usuario("admin", "1234", new Date())];

const contactos = [
  new contacto(
    "Juan Perez",
    "381-1234567",
    "San Martin 123",
    "juanp@gmail.com",
  ),
  new contacto(
    "Maria Gomez",
    "381-7654321",
    "Lavalle 2000",
    "mariag@gmail.com",
  ),
];

//LOGICA DE LA PAGINA DE LOGIN

const loginForm = document.getElementById("loginForm");
const mensajeError = document.getElementById("mensajeError");

if (loginForm) {
    //agrego el preventDefault para que no se recargue la pagina despues de apretar el boton Ingresar y haga la validacion de usuario
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuarioIngresado = document.getElementById("usuario").value;
    const contraseniaIngresada = document.getElementById("contrasenia").value;

    //buscamos que el usuario ingresado coincida con el que ya existe
    const usuarioValido = usuarios.find(
      (usuario) =>
        usuario.nombreUsuario === usuarioIngresado &&
        usuario.contrasenia === contraseniaIngresada,
    );

    //si se cumple la condicion, redirecciona a la pagina de la agenda
    if (usuarioValido) {
      window.location.href = "ejercicio8agenda.html";
    } else {
      mensajeError.classList.remove("d-none");
    }
  });
}

//LOGICA DE LA PAGINA DE AGENDA
const agendaForm = document.getElementById('agendaForm');
const tablaBody = document.getElementById('tablaContactos');

if (agendaForm && tablaBody) {
    const actualizarTabla = () => {
        tablaBody.innerHTML = ''

        contactos.forEach(contacto => {
            const fila = document.createElement('tr')
            fila.innerHTML = `
                <td>${contacto.nomyApe}</td>
                <td>${contacto.telefono}</td>
                <td>${contacto.direccion}</td>
                <td>${contacto.email}</td>
            `
            tablaBody.appendChild(fila)
        })
    }

    actualizarTabla()

    agendaForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const nomyApe = document.getElementById('nomyApe').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const email = document.getElementById('email').value;
    
        const nuevoContacto = new contacto(nomyApe, telefono, direccion, email);
        contactos.push(nuevoContacto);

        actualizarTabla();
        agendaForm.reset();
    })
}