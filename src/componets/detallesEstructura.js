import { chatCompletions } from "../lib/openIaAPI.js"

export const characterDetail = () => {
    const contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.setAttribute('class', "contenedorPrincipal");
    contenedorPrincipal.innerHTML=`<div class="detallesJuegos2" id="detallesJuegos"></div>`;
    const contenedorTexto = document.createElement("div");
    contenedorTexto.setAttribute('class', "contenedorTexto");
    const barraChat = document.createElement("div");
    barraChat.setAttribute('class', "barraChat");
    barraChat.innerHTML=`<textarea id=chatIndividual placeholder="Escribe aquí tu mensaje"></textarea>`;
    const botonEnviar = document.createElement("button");
    botonEnviar.setAttribute('data-testid', 'boton-enviar');
    botonEnviar.setAttribute('name', 'boton-enviar');
    botonEnviar.setAttribute('class', 'enviar-chat');
    botonEnviar.textContent='Enviar';
    barraChat.appendChild(botonEnviar);
    contenedorTexto.appendChild(barraChat);
    contenedorPrincipal.appendChild(contenedorTexto);

    // añadir evento al boton enviar
    // capturar el valor del textarea 
    // capturar el personaje
    // enviar a chatCompletion los dos valores 
    // chatCompletions (personaje, mensaje)

  return contenedorPrincipal;
};





