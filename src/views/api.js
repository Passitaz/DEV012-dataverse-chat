export const api = () => {
    const apiKeyView = document.createElement("section");
    const pantallaApiKey = `
          <div class="contenedorApiKey" id="ingreso">
            <p>Página de apiKey</p>
        
            <button data-testid="boton-regresar" name="boton-regresar" id="botonRegresar">Regresar</button>
          </div>`;
    apiKeyView.innerHTML = pantallaApiKey;

    return apiKeyView;
}