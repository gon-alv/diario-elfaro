const mostrarFechaHora = () => {
  const fecha = new Date();
  document.getElementById("hora").innerText = fecha.toLocaleString();
  setTimeout(() => {
    mostrarFechaHora();
  }, 1000);
}

mostrarFechaHora();