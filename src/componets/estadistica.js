import data from "../data/dataset.js";
import { computeStats } from "../lib/dataFunctions.js";

export const estadisticaJuegos = () =>{
    const pEstadistica = document.createElement('p');
    pEstadistica.setAttribute('id','estadistica');

    const estadisticas = computeStats(data);
    const estadisticasElemento = document.getElementById('estadisticas'); // Asegúrate de tener un elemento con este ID en tu HTML
    estadisticasElemento.textContent = `Juegos Multijugador: ${estadisticas.juegosMultijugador}, Juegos No Multijugador: ${estadisticas.juegosNoMultijugador}`;
    
return pEstadistica;
}