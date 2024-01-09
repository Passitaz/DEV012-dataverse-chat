import { header } from "../src/componets/header.js";

describe("header", () => {
  it("debería generar el header correctamente", () => {
    // Renderiza el componente
    const renderedHeader = header();

   
    expect(renderedHeader).toBeDefined();
    
    // Verifica la presencia de elementos específicos dentro del componente
    const headerElement = document.createElement('div');
    headerElement.innerHTML = renderedHeader;

    const logoContainer = headerElement.querySelector('.logo-container');
    const logoImage = headerElement.querySelector('#logo');

    expect(logoContainer).toBeDefined();
    expect(logoImage).toBeDefined();

    expect(logoImage.src).toContain('Logo.png');

    // Agrega más pruebas según las necesidades de tu componente
  });
});