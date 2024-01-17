
export const chatCompletions = (personaje, mensaje) => {
    const APIKEY = localStorage.getItem('apikey');
    const dataset = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "Tu eres Mario el personaje princial del juego Mario Bros"
          },
          {
            "role": "user",
            "content": "¡Hola! Dime quien eres" //input.value
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
    })
}


