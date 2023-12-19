export const characterDetail = () => {
  const detallesDelPersonaje = `
    <div id="detalles"></div>
    <div id="chat-box" contenteditable="true"></div>
    <div id="contenedor">
    <textarea id=chatIndividual placeholder="Escribe aquí tu mensaje"></textarea>
    <button data-testid="boton-enviar" name="boton-enviar>Enviar</button>
    </div>`;
  return detallesDelPersonaje;
};
