import { botonRegresar } from "../componets/botonPrincipal.js";

export const chatGrupal = () => {
  
    const divChat = document.createElement('div');
    divChat.setAttribute("id", "vistaChat");
    divChat.appendChild(botonRegresar());

    const chatView = document.createElement("section");
    const pantallaChatGrupal = `
          <div class="contenedorFlex" id="chat_grupal">
            <p>Chatea con todos las juegos</p>
          </div>
          <div class=uno></div>
          <div class=dos id="miDivDos"></div> 
          <div class="tres">
           <textarea class="miTextarea" name="miTextarea" placeholder="Tu mensaje aquí" id="miTextarea"></textarea>
           <button class="enviar-chat" id="enviarMensaje">Enviar</button>
          </div>`;
    chatView.innerHTML = pantallaChatGrupal;

    divChat.appendChild(chatView);

    
    const enviarMensajeBtn = divChat.querySelector("#enviarMensaje");
    enviarMensajeBtn.addEventListener("click", enviarMensaje);

    return divChat;
}


const enviarMensaje = () => {
    
    const mensaje = document.getElementById("miTextarea").value;

    
    const nuevoMensaje = document.createElement("p");
    nuevoMensaje.textContent = mensaje;
    
   
    document.getElementById("miTextarea").value = "";

    // Agrega el nuevo mensaje al div dos
    document.getElementById("miDivDos").appendChild(nuevoMensaje);
}