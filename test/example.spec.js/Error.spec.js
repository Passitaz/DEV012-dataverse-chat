import { error } from '../src/views/error.js';
import { botonRegresar } from '../src/componets/botonPrincipal.js';

describe('error', () => {
  test('debería renderizarse sin errores', async () => {
    // Arrange: Configurar el entorno de prueba
    const mockBotonRegresar = jest.spyOn(botonRegresar, 'botonRegresar');

    // Act: Ejecuta la función error
    const result = error();

    // Espera un breve momento para que se procese la llamada asíncrona
    await new Promise(resolve => setTimeout(resolve, 100));

    // Assert: Verifica que se haya creado un elemento con el id "vistaError"
    expect(result.querySelector('#vistaError')).not.toBeNull();

    // Verifica que la función botonRegresar haya sido llamada
    expect(mockBotonRegresar).toHaveBeenCalled();
  });

  // Puedes agregar más pruebas según sea necesario
});