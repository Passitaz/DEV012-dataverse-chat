export const chatGrupal = () => {
    const chatView = document.createElement("section");
    const pantallaChatGrupal= `
          <div class="contenedorFlex" id="chat_grupal">
            <p>Página para el chat grupal</p>

            <button data-testid="boton-regresar" name="boton-regresar" id="botonRegresar">Regresar</button>
          </div>`;
    chatView.innerHTML = pantallaChatGrupal;

    return chatView;
}