export const renderDetails = (data) => {
    const detallesContenedor = document.createElement('div');
    
    for (const detalles of data) {
    const logo=document.createElement("img");
    detallesContenedor.appendChild(logo);
    logo.src=detalles.logo;

    const fotoPersonaje=document.createElement("img");
    detallesContenedor.appendChild(fotoPersonaje);
    fotoPersonaje.src=detalles.personajeUrl;
}
}