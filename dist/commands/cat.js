"use strict";
var axios = require('axios');
var embedCreator = function (url) { return ({
    color: 0x42b983,
    title: 'Here, have a cat...',
    image: {
        url: url,
    },
}); };
module.exports = {
    name: 'cat',
    description: "Here's a cat.",
    execute: function (message, args) {
        axios
            .get('http://aws.random.cat/meow')
            .then(function (e) { return message.channel.send({ embed: embedCreator(e.data.file) }); })
            .catch(function (e) { return 'Something went wrong! No cats for you.'; });
    },
};
