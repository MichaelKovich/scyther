"use strict";
var axios = require('axios');
var embedCreator = function (url) { return ({
    color: 0x42b983,
    title: 'Here, have a dog...',
    image: {
        url: url,
    },
}); };
module.exports = {
    name: 'dog',
    description: "Here's a dog.",
    execute: function (message, args) {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then(function (e) { return message.channel.send({ embed: embedCreator(e.data.message) }); })
            .catch(function (e) { return 'Something went wrong! No dogs for you.'; });
    },
};
