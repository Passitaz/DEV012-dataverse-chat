import { botonRegresar } from "../componets/botonPrincipal.js";

export const api = () => {

  const divApiKey = document.createElement('div');
  divApiKey.setAttribute("id", "pantallaApiKey");
  divApiKey.appendChild(botonRegresar());

  const apiKeyView = document.createElement("section");
  const pantallaApiKey = `
    <div class="contenedorApiKey" id="ingreso">
      <p> Api Key Admin <br>
       Desde aquí puedes administrar la API Key a utilizar</p>
    </div>
    <div>
      <textarea id="apiTex" name="Api" rows="4" cols="50" placeholder="API KEY" class="apiText"></textarea>
      <button data-testid="boton-enviar" name="boton-enviar" id="enviar">Enviar</button>
    </div>`;

  apiKeyView.innerHTML = pantallaApiKey;


  divApiKey.appendChild(apiKeyView);

  return divApiKey;
};