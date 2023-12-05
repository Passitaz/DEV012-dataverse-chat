import data from "../data/dataset.js";
import { renderItems } from "../componets/view.js";
import { footer } from "../componets/footer.js";

export const characterDetail = () => {
  const detallesView = document.createElement("section");
  const detallesDelPersonaje = `
        <button data-testid="boton-home" name="boton-home">Salir</button>
        <div id="detalles"></div>
        <div id="chat-box" contenteditable="true"></div>
        <div id="contenedor">
        <textarea id=chatIndividual placeholder="Escribe aquí tu mensaje"></textarea>
        <button data-testid="boton-enviar" name="boton-enviar>Enviar</button>
        </div>`;
  detallesView += footer();
  const conteinDetails = document.createElement("div");
  conteinDetails = detallesDelPersonaje;
  detallesView.appendChild(renderItems(data));
  return detallesView;
};
