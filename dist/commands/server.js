"use strict";
module.exports = {
    name: 'server',
    description: 'Provides the user with information about the server.',
    execute: function (message, args) {
        message.channel.send("This server's name is: " + message.guild.name);
        message.channel.send("There are " + message.guild.memberCount + " members here.");
        message.channel.send(message.guild.name + " was created on " + message.guild.createdAt);
    },
};
