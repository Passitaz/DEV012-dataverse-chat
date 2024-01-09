import { chatPeticion } from "../src/lib/Api.js";

const openAiRespuesta = jest.fn();
global.fetch = jest.fn(() => Promise.resolve({ json:()=> openAiRespuesta() }));

describe("Endpoint de openIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    localStorage.setItem("apiKey", "123");
    openAiRespuesta.mockResolvedValueOnce({ choices: [{ message: "foo" }] });

    const mensajeUsuaria = "foo";
    const personaje = "Mario";

    chatPeticion(mensajeUsuaria, personaje).then(() => {
      expect(global.fetch).toBeCalledWith(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 123`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: `Toma como rol el personaje principal del videojuego ${personaje} , responde como si fueses dicho personaje`,
              },
              {
                role: "user",
                content: mensajeUsuaria,
              },
            ],
          }),
        }
      );
    });
  });

  it("El edpoint responde de manera corecta", () => {
    const response = {
      choices: [
        {
          message: {
            role: "assistant",
            content: "¡Hola!",
          },
        },
      ],
    };
    openAiRespuesta.mockResolvedValueOnce(response);
    chatPeticion("foo", "Mario").then((respuesta) => {
      expect(respuesta).toEqual(response);
    });
  });
});
