import data from "../data/dataset.js";
import { renderItems } from "../componets/tarjetas.js";
import { footer } from "../componets/footer.js";
import { header } from "../componets/header.js";
import { filtros } from "../componets/filtros.js";


export const Home = () => {
  const homeView = document.createElement("section");
  homeView.innerHTML = header() + filtros();
  
  homeView.appendChild(renderItems(data));

  const homeFooter = document.createElement("section");
  homeFooter.innerHTML = footer();

  homeView.appendChild(homeFooter);

  return homeView;
};
