import { botonRegresar } from "../componets/botonPrincipal.js";

export const api = () => {
  const divApiKey = document.createElement("div");
  divApiKey.setAttribute("id", "pantallaApiKey");
  divApiKey.appendChild(botonRegresar());

  const apiKeyView = document.createElement("section");

  const contenedorApiKeyDiv = document.createElement("div");
  contenedorApiKeyDiv.id = "ingreso";

  const pTexto = document.createTextNode(
    "Api Key Admin \n Desde aquí puedes administrar la API Key a utilizar"
  );
  const pElemento = document.createElement("p");
  pElemento.appendChild(pTexto);
  contenedorApiKeyDiv.appendChild(pElemento);

  const segundoDiv = document.createElement("div");

  const contenidoTextarea = document.createElement("textarea");
  contenidoTextarea.setAttribute("id", "apiTex");
  contenidoTextarea.setAttribute("name", "Api");
  contenidoTextarea.setAttribute("rows", "4");
  contenidoTextarea.setAttribute("cols", "50");
  contenidoTextarea.setAttribute("placeholder", "API KEY");
  contenidoTextarea.setAttribute("class", "apiText");

  const botonEnviar = document.createElement("button");
  botonEnviar.setAttribute("data-testid", "boton-enviar");
  botonEnviar.setAttribute("name", "boton-enviar");
  botonEnviar.setAttribute("id", "enviar");
  botonEnviar.appendChild(document.createTextNode("Enviar"));

  segundoDiv.appendChild(contenidoTextarea);
  segundoDiv.appendChild(botonEnviar);

  apiKeyView.appendChild(contenedorApiKeyDiv);
  apiKeyView.appendChild(segundoDiv);

  document.body.appendChild(apiKeyView);

  botonEnviar.addEventListener("click", () => {
    const apiKey = contenidoTextarea.value;

    if (apiKey) {
      localStorage.setItem("apiKey", apiKey);
      alert("La apikey ha sido validada correctamente");
    } else {
      alert("Ha habido un error. Por favor, introduce una API key válida");
    }
  });

  divApiKey.appendChild(apiKeyView);

  return divApiKey;
};
