import { navigateTo } from "../router.js";

export const botonRegresar = () => {
  const botonRegresarComponent = document.createElement("button");
  botonRegresarComponent.setAttribute("id", "botonRegresar");
  botonRegresarComponent.textContent = "Regresar";
  botonRegresarComponent.addEventListener("click", () => {
    navigateTo("/");
  })
  return botonRegresarComponent;
};
