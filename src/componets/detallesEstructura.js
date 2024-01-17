import { chatCompletions } from "../lib/openIaAPI.js"

export const characterDetail = () => {
  const detallesDelPersonaje = `
    <div class=contenedorPrincipal>
    <div class="detallesJuegos2" id="detallesJuegos">
    </div>
    <div class=contenedorTexto>
    <div class="barraChat">
    <textarea id=chatIndividual placeholder="Escribe aquí tu mensaje"></textarea>
    <button data-testid="boton-enviar" name="boton-enviar class="enviar-chat">Enviar</button>
    </div></div></div>`;
    // añadir evento al boton enviar
    // capturar el valor del textarea 
    // capturar el personaje
    // enviar a chatCompletion los dos valores 
    // chatCompletions (personaje, mensaje)

  return detallesDelPersonaje;
};





