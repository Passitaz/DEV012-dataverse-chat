import { chatPeticion } from "../lib/Api.js";
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
//
  const enviarMensaje = async () => {
    const mensajeUsuario = textarea.value.trim();

    if (mensajeUsuario !== "") {
      const nuevoMensajeUsuario = document.createElement("p");
      nuevoMensajeUsuario.textContent = mensajeUsuario;
      contenedorMensajes.appendChild(nuevoMensajeUsuario);
      textarea.value = "";
      nuevoMensajeUsuario.style.backgroundColor = "lightblue";
      nuevoMensajeUsuario.style.padding = "10px";
      nuevoMensajeUsuario.style.borderRadius = "5px";

      try {
        // Llamada a chatPeticion para obtener la respuesta
        const respuesta = await chatPeticion(mensajeUsuario, props.personaje);

        // Verificar que la respuesta tenga la estructura esperada
        if (respuesta.choices && respuesta.choices[0] && respuesta.choices[0].message) {
          // Agregar la respuesta al contenedor de mensajes
          const nuevoMensajeAI = document.createElement("p");
          nuevoMensajeAI.textContent = respuesta.choices[0].message.content;
          contenedorMensajes.appendChild(nuevoMensajeAI);
          nuevoMensajeAI.style.backgroundColor = "lightgreen";
          nuevoMensajeAI.style.padding = "10px";
          nuevoMensajeAI.style.borderRadius = "5px";
        } else {
          console.error('La respuesta del modelo no tiene la estructura esperada:', respuesta);
        }
      } catch (error) {
        console.error('Error al obtener respuesta del modelo:', error.message);
      }
    }
  };

  button.addEventListener("click", enviarMensaje);

  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      enviarMensaje();
    }
  });

  divCharacter.appendChild(characterView);
  return divCharacter;
};