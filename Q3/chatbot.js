module.exports.chatreplay = (message) => {
    if (message.toLowerCase().indexOf('hii') > -1 || message.toLowerCase().indexOf('hello') > -1) {
        return "hello";
    }
    else if (message.toLowerCase().indexOf('What is Node.js ?') > -1 || message.toLowerCase().indexOf('node.js') > -1) {
        return "node.js is free to use";
    }
    else {
        return "I Don't Know";
    }
}

// module.exports.chatbotreply = function (message) {
//     this.age = 25;
//     this.name = 'chatGpt';
//     this.university = 'vnsgu';
//     this.country = 'india';
//     message = message.toLowerCase()

//     if (message.indexOf('hi') > -1) {
//         return "h1!";
//     } else if (message.indexOf('age') > -1) {
//         return this.age;
//     } else {
//         return "sorry i did not get it .!!";
//     }
// }