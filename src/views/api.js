export const api = () => {
    const apiKeyView = document.createElement("section");
    const pantallaApiKey = `
    <button data-testid="boton-regresar" name="boton-regresar" id="botonRegresar">Regresar</button>
          <div class="contenedorApiKey" id="ingreso">
          
            <p> Api Key Admin <br>
             Desde aqui puedes administrar la API Key a utilizar</p>
            
          </div>
          <textarea id="miTextarea" name="miTextarea" rows="4" cols="50" placeholder="API KEY"></textarea>
          <button data-testid="boton-enviar" name="boton-enviar" id="enviar">Enviar</button>`;
    apiKeyView.innerHTML = pantallaApiKey;

    return apiKeyView;
}