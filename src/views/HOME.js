import data from "../data/dataset.js";
import { renderItems } from "../componets/tarjetas.js";
import { footer } from "../componets/footer.js";
import { header } from "../componets/header.js";
import { vistaFiltro } from "../componets/filtros.js"; // Asegúrate de que esta importación es correcta
import { filtrosT } from "../lib/dataFunctions.js";

export const Home = () => {
  const divHome = document.createElement('div');
  divHome.setAttribute('id', 'vistaHome');

  const homeView = document.createElement("section");
  homeView.innerHTML = header() + vistaFiltro(); // Asegúrate de que vistaFiltro() retorna el HTML esperado

  const itemsDiv = document.createElement('div');
  itemsDiv.setAttribute('id', 'itemsDiv');
  homeView.appendChild(itemsDiv);

  const homeFooter = document.createElement("section");
  homeFooter.innerHTML = footer();
  homeView.appendChild(homeFooter);

  divHome.appendChild(homeView);

  function agregarEventosFiltros() {
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');

    filtrarGenero.addEventListener("change", aplicarFiltros);
    filtrarPOV.addEventListener("change", aplicarFiltros);
    ordenaAZ.addEventListener("change", aplicarFiltros);
  }

  function aplicarFiltros() {
    // Las variables deben ser definidas dentro de esta función
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');

    const indice = filtrarGenero.selectedIndex;
    const optionSelect = filtrarGenero.options[indice];
    const indicePov = filtrarPOV.selectedIndex;
    const optionSelectPOV = filtrarPOV.options[indicePov];
    const indiceOrdenar = ordenaAZ.selectedIndex;
    const ordenar = ordenaAZ.options[indiceOrdenar];
    itemsDiv.innerHTML = "";

    const dataFiltrada = filtrosT(data, optionSelect.value, optionSelectPOV.value, ordenar.value);
    itemsDiv.appendChild(renderItems(dataFiltrada));
  }

  document.body.appendChild(divHome);
  agregarEventosFiltros();
  aplicarFiltros();
  return divHome;
};




