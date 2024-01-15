import { chatCompletions } from "../lib/openIaAPI";


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
  return detallesDelPersonaje;
};


//1.-boton botonEnviar(traer el valor de localStorage)
//2.-cuando se tenga el valor envia a chatCompletions

