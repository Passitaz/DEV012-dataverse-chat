import { characterDetails } from '../src/views/CharacterDetail.js';

describe('characterDetails', () => {
  test('debería enviar mensajes correctamente', async () => {
    // Arrange: Configurar el entorno de pruebI
    const props = {
      name: 'NombreDelPersonaje', // Proporciona un nombre para las pruebas
    };

    //  Ejecuta la función characterDetails con las props
    const result = characterDetails(props);

    // Accede al textarea y al botón para enviar mensajes
    const textarea = result.querySelector('#chatIndividual');
    const button = result.querySelector('#botonEnviar');

    // Simula escribir un mensaje y hacer clic en el botón
    textarea.value = 'Hola, soy un mensaje de prueba';
    button.click();

    // Espera un breve momento para que se procese la llamada asincrónica
    await new Promise(resolve => setTimeout(resolve, 100));

    // Accede al contenedor de mensajes
    const contenedorMensajes = result.querySelector('#textoContenedor');

    // : Verifica que se haya agregado un mensaje de usuario al contenedor
    expect(contenedorMensajes.children.length).toBe(1);

    // Verifica que el mensaje de usuario tenga el contenido correcto
    expect(contenedorMensajes.children[0].textContent).toBe('Hola, soy un mensaje de prueba');
  });
});