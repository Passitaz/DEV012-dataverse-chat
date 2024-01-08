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
  // Obtiene el contenido del textarea y elimina espacios en blanco al inicio y al final
  const mensajeUsuario = textarea.value.trim();

  // Verifica que el mensaje del usuario no esté vacío
  if (mensajeUsuario !== "") {
    // Crea un nuevo elemento <p> para representar el mensaje del usuario
    const nuevoMensajeUsuario = document.createElement("p");
    
    // Asigna el contenido del mensaje del usuario al nuevo elemento <p>
    nuevoMensajeUsuario.textContent = mensajeUsuario;
    
    // Agrega el nuevo elemento al contenedor de mensajes
    contenedorMensajes.appendChild(nuevoMensajeUsuario);
    
    // Limpia el contenido del textarea
    textarea.value = "";
    
    // Estiliza el mensaje del usuario con un fondo azul claro, relleno, y bordes redondeados
    nuevoMensajeUsuario.style.backgroundColor = "lightblue";
    nuevoMensajeUsuario.style.padding = "10px";
    nuevoMensajeUsuario.style.borderRadius = "5px";

    try {
      // Realiza una llamada asíncrona a la función chatPeticion para obtener la respuesta del modelo
      const respuesta = await chatPeticion(mensajeUsuario, props.personaje);

      // Verifica que la respuesta tenga la estructura esperada
      if (respuesta.choices && respuesta.choices[0] && respuesta.choices[0].message) {
        // Crea un nuevo elemento <p> para representar la respuesta del modelo
        const nuevoMensajeAI = document.createElement("p");
        
        // Asigna el contenido de la respuesta del modelo al nuevo elemento <p>
        nuevoMensajeAI.textContent = respuesta.choices[0].message.content;
        
        // Agrega el nuevo elemento al contenedor de mensajes
        contenedorMensajes.appendChild(nuevoMensajeAI);
        
        // Estiliza la respuesta del modelo con un fondo verde claro, relleno, y bordes redondeados
        nuevoMensajeAI.style.backgroundColor = "lightgreen";
        nuevoMensajeAI.style.padding = "10px";
        nuevoMensajeAI.style.borderRadius = "5px";
      } else {
        // Imprime un mensaje de error si la respuesta del modelo no tiene la estructura esperada
        console.error('La respuesta del modelo no tiene la estructura esperada:', respuesta);
      }
    } catch (error) {
      // Captura y maneja errores al obtener la respuesta del modelo
      console.error('Error al obtener respuesta del modelo:', error.message);
    }
  }
};

// Agrega el evento click al botón y llama a la función enviarMensaje
button.addEventListener("click", enviarMensaje);

// Agrega un evento al textarea para detectar la tecla "Enter" y llama a la función enviarMensaje
textarea.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    enviarMensaje();
  }
});

// Agrega el contenedor de la vista del personaje al elemento divCharacter y lo devuelve
divCharacter.appendChild(characterView);
return divCharacter;
};
