import { botonRegresar} from "../componets/botonPrincipal.js";

export const error = () => {
  const divError = document.createElement('div');
  divError.setAttribute("id","vistaError")
  divError.appendChild(botonRegresar());

  const errorView = document.createElement("section");
  const pantallaError = `
        <div class="contenedorFlex" id="mensajeError">
          <p>Página no encontrada</p>
          <p>Lo sentimos, al parecer esta parte del arcade no está funcionando.</p>
          <p>Por favor regresa a la página principal para seguir disfrutando.</p>
          
        </div>`;
  errorView.innerHTML = pantallaError;

  divError.appendChild(errorView);

  document.body.style.backgroundImage = 'url("https://raw.githubusercontent.com/Passitaz/DEV012-dataverse-chat/main/Pantalla%20de%20error.png")';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
 
  return divError;
};