export const error = () => {
  const errorView = document.createElement("section");
  const pantallaError = `
        <div class="contenedorFlex">
          <p>Página no encontrada</p>
          <p>Lo sentimos, al parecer esta parte del arcade no está funcionando.</p>
          <p>Por favor regresa a la página principal para seguir disfrutando.</p>
          <button data-testid="boton-regresar" name="boton-regresar">Regresar</button>
        </div>`;
  errorView.innerHTML = pantallaError;

  document.body.style.backgroundImage = 'url("https://raw.githubusercontent.com/Passitaz/DEV012-dataverse-chat/main/Pantalla%20error.png")';
  document.body.style.backgroundSize = '100% 500%';
  document.body.style.backgroundRepeat = 'no-repeat';
 
  return errorView;
};