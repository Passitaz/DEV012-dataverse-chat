const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
        {
          role: "system",
          content: "Tu eres Marios el personaje princial del juego Mario Bros"
        },
        {
          role: "user",
          content: "¡Hola! Dime quien eres"
        }
      ]
}

fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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",
    },
    body: JSON.stringify(requestBody)
})
    .then((responseOpenIA) => {
        responseOpenIA.json().then((responseZPObjet)=> {
            console.log(responseZPObjet);   
        })
})



console.log("saludo 1");
console.log("saludo 2");
console.log("saludo 3");
console.log("saludo 4");