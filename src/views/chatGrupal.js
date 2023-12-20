export const chatGrupal = () => {
    const chatView = document.createElement("section");
    const pantallaChatGrupal= `
          <button data-testid="boton-regresar" name="boton-regresar" id="botonRegresar">Regresar</button>
          <div class="contenedorFlex" id="chat_grupal">
            <p>Chatea con todos las juegos</p>
          </div>
          <div class=uno></div>
          <div class=dos></div>
          <div class="tres">
           <textarea id="miTextarea" name="miTextarea" placeholder="Tu mensaje aquí"></textarea>
           <button  id="enviar-g">Enviar</button>
          </div>`;
    chatView.innerHTML = pantallaChatGrupal;

    return chatView;
}