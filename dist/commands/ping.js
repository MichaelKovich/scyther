"use strict";
module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute: function (message, args) {
        message.channel.send('Pong.');
    },
};
