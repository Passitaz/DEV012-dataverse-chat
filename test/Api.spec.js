/*import { jest } from "@jest/globals";
import { describe } from "yargs";

const openAiRespuesta = jest.fn();
global.fetch = jest.fn(() => Promise.resolve({ json: openAiRespuesta }));

describe("Endpoint de openIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    openAiRespuesta.mockRejectedValueOnce({ choices: [{ message: "foo" }] });

    const mensaje = [{ role: "user", content: "foo" }];

    chatCompletions("12563", mensaje);

    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 12563`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          mensaje,
        }),
      }
    );
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
  });
});*/
