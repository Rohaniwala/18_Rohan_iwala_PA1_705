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

