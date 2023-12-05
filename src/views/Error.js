export const error = () => {
  const errorView = document.createElement("section");
  const pantallaError = `
        <div class=contenedorFlex>
        <p>Pagina no encontrada</p>
        <p>Lo sentimos, al parecer esta parte del arcade no está funcionando.</p>
        <p>Por favor regresa a la página principal para seguir disfrutando.</p>

        <button data-testid="boton-regresar" name="boton-regresar">Regresar</button>
        </div>;`;
  const conteinError = document.createElement("div");
  conteinError = pantallaError;
  return errorView;
};
