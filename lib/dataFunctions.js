export const filtrosT = (data, genero, pov, orden) => {
  let dataFiltrada = data;
  if (genero !== "nada") {
    dataFiltrada = filtroGenero(dataFiltrada, genero);
  }
  if (pov !== "nada") {
    dataFiltrada = filtroPOV(dataFiltrada, pov);
  }
  if (orden === "asc") {
    dataFiltrada = ordenaAZ(dataFiltrada);
  }
  if (orden === "desc") {
    dataFiltrada = ordenaZA(dataFiltrada);
  }
  return dataFiltrada;
};

export const filtroGenero = (data, genero) => {
  const filtro1 = data.filter((item) => item.facts.gender === genero);
  return filtro1;
};

export const filtroPOV = (data, POV) => {
  const filtro1 = data.filter((item) => item.facts.pointsOfView === POV);
  return filtro1;
};
export const ordenaAZ = (data) => {
  const ordenAz = data.sort((a, b) => {
    if (a.name < b.name) {
      return -1; // a viene antes que b
    } else if (a.name > b.name) {
      return 1; // b viene antes que a
    }
    return 0; // a y b son iguales
  });
  return ordenAz;
};

export const ordenaZA = (data) => {
  const ordenaZa = data.sort((a, b) => {
    if (a.name > b.name) {
      return -1; // a viene antes que b
    } else if (a.name < b.name) {
      return 1; // b viene antes que a
    }
    return 0; // a y b son iguales
  });
  return ordenaZa;
};