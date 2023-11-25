const { WebClient } = require('@slack/web-api');

const web = new WebClient("xoxp-6214323179937-6224675652064-6270411657696-94d2160cde799165b3fd92ecd6d90ef2");

async function sendAlert(message) {
    try {
        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
          channel: '#avisos',
          text: message,
        });
        return "Mensagem Postada com sucesso!";
    } catch (error) {
        return "Erro no slack";
    }
} 

module.exports = {
    sendAlert
}