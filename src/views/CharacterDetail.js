import { renderDetails } from "../componets/detalles.js";
import { botonRegresar } from "../componets/botonPrincipal.js";

export const characterDetails = (props) => {
  const divCharacter = document.createElement('div');
  divCharacter.setAttribute('id', 'vistaDetalles');
  divCharacter.appendChild(botonRegresar());

  const characterView = document.createElement("section");
  const contenedorDetalles = document.createElement("div");
  const barraChat = document.createElement("div");
  const textarea = document.createElement("textarea");
  const button = document.createElement("button");
  const contenedorMensajes = document.createElement("div");

  characterView.classList.add("contenedorPrincipal");
  contenedorDetalles.classList.add("detallesJuegos2");
  contenedorDetalles.id = "detallesJuegos";
  barraChat.classList.add("contenedorTexto");
  textarea.id = "chatIndividual";
  textarea.placeholder = "Escribe aquí tu mensaje";
  button.dataset.testid = "boton-enviar";
  button.name = "boton-enviar";
  button.id = "botonEnviar";
  button.classList.add("enviar-chat");
  button.textContent = "Enviar";
  contenedorMensajes.id = "textoContenedor";

  barraChat.appendChild(textarea);
  barraChat.appendChild(button);
  barraChat.appendChild(contenedorMensajes);

  const detallesElemento = renderDetails(props);
  contenedorDetalles.appendChild(detallesElemento);
  contenedorDetalles.appendChild(barraChat); // Mover barraChat dentro de contenedorDetalles

  characterView.appendChild(contenedorDetalles);
  characterView.appendChild(barraChat);

  const enviarMensaje = () => {
    const mensaje = textarea.value.trim();
    if (mensaje !== "") {
      const nuevoMensaje = document.createElement("p");
      nuevoMensaje.textContent = mensaje;
      contenedorMensajes.appendChild(nuevoMensaje);
      textarea.value = "";
      nuevoMensaje.style.backgroundColor = "lightblue";
      nuevoMensaje.style.padding = "10px";
      nuevoMensaje.style.borderRadius = "5px";
    }
  };
  
  // Evento al hacer clic en el botón
  button.addEventListener("click", enviarMensaje);
  

  textarea.addEventListener("keydown", (event) => {
    // Verificar si la tecla presionada es Enter
    if (event.key === "Enter") {
      // Evitar el salto de línea por defecto en el textarea
      event.preventDefault();
      // Llamar a la función para enviar el mensaje
      enviarMensaje();
    }
  });

  divCharacter.appendChild(characterView);
  return divCharacter;
};

 
  