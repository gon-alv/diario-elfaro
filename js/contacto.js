document.getElementById('form-contacto').addEventListener('submit', function(e){
  e.preventDefault();
  const nombre = document.getElementById('nombre-contacto').value.trim();
  const mensaje = document.getElementById('mensaje-contacto').value.trim();
  if(nombre && mensaje){
    document.getElementById('mensaje-enviado').textContent = `¡Gracias ${nombre}, tu mensaje fue enviado!`;
    this.reset();
    setTimeout(()=>{document.getElementById('mensaje-enviado').textContent='';}, 4000);
  }
});