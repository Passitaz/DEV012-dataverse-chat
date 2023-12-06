export const renderItems = (data) => {
    //creación ul
    const contenedorUl = document.createElement("ul");
    //creación div
    const contenedorDetalles = document.createElement("div");
  
    //For of
    for (const datos of data) {
      //creación li
      const contenedorLi = document.createElement("li");
      contenedorUl.appendChild(contenedorLi);
  
      //creación del segundo div
      const contenedorDatos = document.createElement("div");
      contenedorDetalles.appendChild(contenedorDatos);
  
      //creación dl
      const grupodl = document.createElement("dl");
      contenedorLi.appendChild(grupodl);
      grupodl.setAttribute("itemscope", "");
      grupodl.setAttribute("itemtype", "videojuegos");
      //elementos dentro de dl
      const portada = document.createElement("img");
      grupodl.appendChild(portada);
      portada.src = datos.imageUrl;
      //nombre
      const dt1 = document.createElement("dt");
      grupodl.appendChild(dt1);
      dt1.textContent = "Nombre:";
      //dd
      const dd1 = document.createElement("dd");
      grupodl.appendChild(dd1);
      dd1.setAttribute("itemprop", "name");
      dd1.textContent = datos.name;
      //descripción corta
      const dt2 = document.createElement("dt");
      grupodl.appendChild(dt2);
      dt2.textContent = "Descripción corta:";
      const dd2 = document.createElement("dd");
      grupodl.appendChild(dd2);
      dd2.setAttribute("itemprop", "shortDescription");
      dd2.textContent = datos.shortDescription;
    }
    return contenedorUl;
}