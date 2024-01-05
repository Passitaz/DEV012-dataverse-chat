export const chatPeticion = (mensajeUsuario, personaje) => {
    const API = localStorage.getItem("apiKey");
    return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API}`,
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": `Toma como rol el personaje principal del videojuego ${personaje} , responde como si fueses dicho personaje` ,
        },
        {
          "role": "user",
          "content": mensajeUsuario
        }
      ]

    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      throw new Error('Error al comunicarse con la API');
    });
};
