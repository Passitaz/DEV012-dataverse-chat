import dataset from "../data/dataset";

export const chatCompletions = (APIKEY, chatMessage) => {
    return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${APIKEY}`,
    },
    body: JSON.stringify(dataset),
}).then((responseOpenIA) => {
    responseOpenIA.json().then((responseZPObjet)=> {
        console.log(responseZPObjet);   
    })
})
}