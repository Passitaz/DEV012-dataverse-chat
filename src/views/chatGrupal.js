import { botonRegresar} from "../componets/botonPrincipal.js";

export const chatGrupal = () => {
  const divChat = document.createElement('div');
  divChat.setAttribute("id","vistaChat");
  divChat.appendChild(botonRegresar());

    const chatView = document.createElement("section");
    const pantallaChatGrupal= `
          <div class="contenedorFlex" id="chat_grupal">
            <p>Chatea con todos las juegos</p>
          </div>
          <div class=uno></div>
          <div class=dos></div>
          <div class="tres">
           <textarea class="miTextarea" name="miTextarea" placeholder="Tu mensaje aquí"></textarea>
           <button  class="enviar-chat">Enviar</button>
          </div>`;
    chatView.innerHTML = pantallaChatGrupal;

    divChat.appendChild(chatView);

    return divChat;
}