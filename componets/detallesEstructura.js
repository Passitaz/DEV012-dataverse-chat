import { chatCompletions } from "../lib/openIaAPI.js"

export const characterDetail = (props) => {
  const contenedorPrincipal = document.createElement("div");
  contenedorPrincipal.className = "contenedorPrincipal";
  contenedorPrincipal.innerHTML = `<div class="detallesJuegos2" id="detallesJuegos"></div>`;
  const contenedorTexto = document.createElement("div");
  contenedorTexto.className = "contenedorTexto";
  const contenedorConversacion = document.createElement("div");
  contenedorConversacion.setAttribute('id', 'contenedor-conversacion');
  contenedorConversacion.className = 'contenedorConversacion';
  const barraChat = document.createElement("div");
  barraChat.className = "barraChat";
  const textArea = document.createElement("textarea");
  textArea.addEventListener('keydown', (event) => {
    if(event.isComposing || event.key === 'Enter') {
      event.preventDefault();
      enviarMensaje();
    }
  });
  textArea.setAttribute('id', 'chatIndividual');
  textArea.setAttribute('placeholder', 'Escribe aquí tu mensaje');
  const botonEnviar = document.createElement("button");
  botonEnviar.setAttribute('data-testid', 'boton-enviar');
  botonEnviar.setAttribute('name', 'boton-enviar');
  botonEnviar.className = 'enviar-chat';
  botonEnviar.textContent = 'Enviar';
  barraChat.appendChild(textArea);
  barraChat.appendChild(botonEnviar);
  contenedorTexto.appendChild(contenedorConversacion);
  contenedorTexto.appendChild(barraChat);
  contenedorPrincipal.appendChild(contenedorTexto);

  botonEnviar.addEventListener('click', () => {
    //console.log(textArea.value);
    enviarMensaje();
  });
  
  function enviarMensaje () {
    if (textArea === '') {
      alert('Escribe un mensaje de texto antes de enviar');
    } else {
      const contenedorDiv = document.createElement('div');
      contenedorDiv.className = 'contenedor-div';
      const mensaje = document.createElement('p');
      mensaje.className = 'mensaje-usuario';
      mensaje.innerHTML = "<strong>Usuario: </strong>" + textArea.value;
      contenedorDiv.appendChild(mensaje);
      contenedorConversacion.appendChild(contenedorDiv);
      textArea.value = '';

      chatCompletions(textArea.value, contenedorConversacion, props.personaje, props.name);
    }
  }
  return contenedorPrincipal;
};