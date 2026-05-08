const JapanCitys = [
  {
    nombre: "Tokio",
    poblacion: "13.9 millones",
    area: "2194 km²",
    imagenUrl: "https://images.pexels.com/photos/35175267/pexels-photo-35175267.jpeg",
    altitud: "40 m",
    clima: "Templado",
  },
  {
    nombre: "Osaka",
    poblacion: "2.7 millones",
    area: "225 km²",
    imagenUrl: "https://images.pexels.com/photos/30944530/pexels-photo-30944530.jpeg",
    altitud: "50 m",
    clima: "Subtropical humedo",
  },
  {
    nombre: "Kioto",
    poblacion: "1.4 millones",
    area: "827 km²",
    imagenUrl: "https://images.pexels.com/photos/10952225/pexels-photo-10952225.jpeg",
    altitud: "55 m",
    clima: "Templado",
  },
  {
    nombre: "Hiroshima",
    poblacion: "1.1 millones",
    area: "905 km²",
    imagenUrl: "https://images.pexels.com/photos/30801950/pexels-photo-30801950.jpeg",
    altitud: "40 m",
    clima: "Subtropical humedo",
  },
  {
    nombre: "Sapporo",
    poblacion: "1.9 millones",
    area: "1,121 km²",
    imagenUrl: "https://images.pexels.com/photos/36053234/pexels-photo-36053234.jpeg",
    altitud: "29 m",
    clima: "Continental húmedo",
  },

  {
    nombre: "Nagoya",
    poblacion: "2.3 millones",
    area: "326 km²",
    imagenUrl: "https://images.pexels.com/photos/12544134/pexels-photo-12544134.jpeg",
    altitud: "15 m",
    clima: "Subtropical húmedo",
  },
];

const contenedor = document.getElementById("contenedorCards");

const cards = JapanCitys.map((ciudad) => {
  return `
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <img src="${ciudad.imagenUrl}" class="card-img-top" alt="${ciudad.nombre}">
        <div class="card-body">
          <h5 class="card-title">${ciudad.nombre}</h5>
          <p class="card-text">
            <strong>Población:</strong> ${ciudad.poblacion}
          </p>
          <p class="card-text">
            <strong>Área:</strong> ${ciudad.area}
          </p>
          <p class="card-text">
            <strong>Altitud:</strong> ${ciudad.altitud}
          </p>
          <p class="card-text">
            <strong>Clima:</strong> ${ciudad.clima}
          </p>
        </div>
    </div>
  </div>
  `;
}).join('');

contenedor.innerHTML = cards
