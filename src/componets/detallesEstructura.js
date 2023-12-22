export const characterDetail = () => {
  const detallesDelPersonaje = `
    <div id="detalles"></div>
    <div id="chat-box" contenteditable="true"></div>
    <div id="contenedor">
    <div class=contenedorPrincipal>
    <div class=contenedorTexto>
    <div class="barraChat">
    <textarea id=chatIndividual placeholder="Escribe aquí tu mensaje"></textarea>
    <button data-testid="boton-enviar" name="boton-enviar class="enviar-chat">Enviar</button>
    </div></div></div>`;
  return detallesDelPersonaje;
};
