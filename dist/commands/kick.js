"use strict";
var embedCreator = function (taggedUser) { return ({
    color: 0x42b983,
    title: "'Bout to show " + taggedUser.username + " the flowers",
    image: {
        url: 'https://i1.wp.com/twdfansite.com/wp-content/uploads/2015/10/walking-dead-carol.jpg',
    },
}); };
module.exports = {
    name: 'kick',
    description: 'Kicks the user from the server.',
    execute: function (message, args) {
        if (!message.mentions.users.size) {
            message.reply('You need to tag a user in order to kick them!');
        }
        var taggedUser = message.mentions.users.first();
        message.channel.send({ embed: embedCreator(taggedUser) });
    },
};
