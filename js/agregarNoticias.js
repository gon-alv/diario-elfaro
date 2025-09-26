// Artículos dinámicos
function renderArticulos() {
  const contenedorArticulos = document.getElementById("container-articulos");
  // Limpiar el contenedor antes de renderizar
  contenedorArticulos.innerHTML = '';
  
  if (articulos.length === 0) {
    contenedorArticulos.innerHTML = '<p>No hay artículos disponibles.</p>';
    document.getElementById('contador-articulos').textContent = `Cantidad de artículos: 0`;
    return;
  }
  
  // Obtener el último artículo (más reciente)
  const ultimoArticulo = articulos[articulos.length - 1];
  
  // Crear la tarjeta grande para el último artículo
  const tarjetaGrande = `
    <div class="articulo-destacado" style="margin-bottom: 30px;">
      <div class="card">
        <div class="card-image">
          <figure class="image articulo-destacado-img">
            <img src="${ultimoArticulo.imagen}" alt="${ultimoArticulo.descripcion}">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h3 class="title is-3">${ultimoArticulo.titulo}</h3>
            <p class="subtitle is-5">${ultimoArticulo.descripcion}</p>
            <a href="${ultimoArticulo.enlace}" class="button is-primary is-medium">Leer más</a>
          </div>
        </div>
      </div>
    </div>`;
  
  // Crear las tarjetas en 3 columnas para el resto de artículos
  let tarjetasColumnas = '';
  if (articulos.length > 1) {
    tarjetasColumnas = '<div class="columns is-multiline" style="margin-top: 20px;">';
    
    // Crear tarjetas para todos los artículos excepto el último
    for (let i = articulos.length - 2; i >= 0; i--) {
      const articulo = articulos[i];
      tarjetasColumnas += `
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-1by1">
                <img src="${articulo.imagen}" alt="${articulo.descripcion}">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h6 class="title is-6">${articulo.titulo}</h6>
                <p class="subtitle is-7">${articulo.descripcion.length > 100 ? articulo.descripcion.substring(0, 100) + '...' : articulo.descripcion}</p>
                <a href="${articulo.enlace}" class="button is-primary is-small">Leer más</a>
              </div>
            </div>
          </div>
        </div>`;
    }
    
    tarjetasColumnas += '</div>';
  }
  
  // Insertar el contenido completo
  contenedorArticulos.innerHTML = tarjetaGrande + tarjetasColumnas;
  
  // Actualizar contador
  document.getElementById('contador-articulos').textContent = `Cantidad de artículos: ${articulos.length}`;
}

const validarFormulario = () => {
  const formulario = document.getElementById("form-articulo");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo-articulo").value.trim();
    const desc = document.getElementById("desc-articulo").value.trim();
    if (titulo && desc) {
      const nuevoArticulo = {
        titulo: titulo,
        descripcion: desc,
        imagen: "https://picsum.photos/600/300?random=" + Date.now(), // Imagen aleatoria única
        enlace: "#"
      }
      articulos.push(nuevoArticulo);
      renderArticulos();
      formulario.reset();
    }
  })
};

document.addEventListener("DOMContentLoaded", function () {
  renderArticulos();
  validarFormulario();
});