const agregarPersonaje = (nombre, imagen) => {
    const contenedor = document.getElementById("personajes");
  
    const personaje = document.createElement("div");
    personaje.innerHTML = `
    <div class="personaje">
      <h5 class="personaje__nombre">${nombre}</h5>
      <img class="personaje__imagen" src="${imagen}" />
    </div>`;
  
    contenedor.appendChild(personaje);
  };
  
  const render = async () => {
    // 1. Completar el código aqui para cargar el archivo json y crear los elementos HTML.
    // 2. Para cargar el archivo json se debe usar la función fetch y luego convertir la respuesta a un objeto JSON usando la función json().
    // 3. La función agregarPersonaje(nombre, imagen) recibe los datos del personaje y crea el elemento HTML con la información del personaje.
  };
  
  document.addEventListener("DOMContentLoaded", render);