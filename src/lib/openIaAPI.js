
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
        let mensajeRespuesta = cuerpoRespuesta.choices[0].message.content;
        const mensajeIA = document.createElement('div');
        mensajeIA.textContent = personaje + ": " + mensajeRespuesta;
        contenedor.appendChild(mensajeIA);

      }).catch((error) => {
        alert ("Usuario, ha ocurrido el siguiente error: " + error);
       });
    }).catch((error) => {
      alert ("Usuario, ha ocurrido el siguiente error: " + error);
    });
}


