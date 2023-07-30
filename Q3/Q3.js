const chatbox = require('../Q3/chatbot');
var readline = require('readline');
var interface = readline.createInterface(process.stdin, process.stdout);
interface.setPrompt("enter Your Question :-");
interface.prompt();
interface.on('line', (msg) => {
    console.log(chatbox.chatreplay(msg));
    interface.prompt();
})

// var chatbot = require('../Q3/chatbot');
// var readline = require('readline');
// var r1 = readline.createInterface(process.stdin, process.stdout);
// r1.setPrompt("You==> ");
// r1.prompt();

// r1.on('line', function (message) {
//     console.log('Bot==> ' + chatbot.chatbotreply(message));
//     r1.prompt();
// }).on('close', function () {
//     process.exit(0);
// })