export const chatCompletions = (mensaje, contenedor, personaje, juego) => {
  const APIKEY = localStorage.getItem('apikey');
  const dataset = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "Tu eres " + personaje + ", un personaje de el juego " + juego + "."
      },
      {
        "role": "user",
        "content": mensaje
      }
    ]
  }

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${APIKEY}`,
    },
    body: JSON.stringify(dataset),
  }).then((respuesta) => {
    respuesta.json().then((cuerpoRespuesta) => {
      const mensajeRespuesta = cuerpoRespuesta.choices[0].message.content;
      const contenedorDiv = document.createElement('div');
      contenedorDiv.className = 'contenedor-div-dos';
      const mensajeIA = document.createElement('p');
      mensajeIA.className = 'mensaje-personaje';
      mensajeIA.innerHTML = "<strong>" + personaje + "</strong>" + ": " + mensajeRespuesta;
      contenedorDiv.appendChild(mensajeIA);
      contenedor.appendChild(contenedorDiv);
    }).catch(() => {
      alert("Usuario, aun no has agregado la ApiKey: ");
    });
  }).catch((error) => {
    alert("Usuario, ha ocurrido el siguiente error: " + error);
  });
}