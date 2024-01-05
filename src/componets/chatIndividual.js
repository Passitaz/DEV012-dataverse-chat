export const chatIndividual = () => {
    const divChat = document.createElement("div");
    divChat.id = "contenedorTexto";
    divChat.classList.add("contenedorTexto");
  
    const barraChat = document.createElement("div");
    barraChat.classList.add("barraChat");
  
    const textarea = document.createElement("textarea");
    textarea.id = "chatIndividual";
    textarea.name = "chatIndividual";
    textarea.placeholder = "Escribe aquí tu mensaje";
  
    const enviarButton = document.createElement("button");
    enviarButton.dataset.testid = "boton-enviar";
    enviarButton.name = "boton-enviar";
    enviarButton.classList.add("enviar-chat");
    enviarButton.id = "botonEnviar";
    enviarButton.textContent = "Enviar";
  
    enviarButton.addEventListener("click", botonEnviar);
    console.log("hola")
    
  
    barraChat.appendChild(textarea);
    barraChat.appendChild(enviarButton);
    divChat.appendChild(barraChat);
  
    return divChat;
  };
  
  const botonEnviar = () => {
    const mensaje = document.getElementById("chatIndividual").value;
  
    if (mensaje.trim() === "") {
      return;
    }
  
    const nuevoMensajeP = document.createElement("p");
    nuevoMensajeP.textContent = mensaje;
  
    document.getElementById("chatIndividual").value = "";
  
    document.getElementById("contenedorTexto").appendChild(nuevoMensajeP);
  };