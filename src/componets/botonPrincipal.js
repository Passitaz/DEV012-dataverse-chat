import { navigateTo } from './router.js';

export const botonRegresar = () => {
  const botonRegresarComponent = document.createElement("button");
  botonRegresarComponent.setAttribute("id","botonRegresar");
  botonRegresarComponent.addEventListener("ckick",volverHome);
  function volverHome(){
    navigateTo("/");
  }

  return botonRegresarComponent;
};
