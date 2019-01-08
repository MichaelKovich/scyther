"use strict";
var axios = require('axios');
var giphyKey = require('../config/config.json').giphyKey;
var embedCreator = function (url) { return ({
    color: 0x42b983,
    title: 'Oink, oink!',
    image: {
        url: url,
    },
}); };
module.exports = {
    name: 'pig',
    description: 'Oink, oink!',
    execute: function (message, args) {
        axios
            .get("https://api.giphy.com/v1/gifs/random?api_key=" + giphyKey + "&tag=pig&rating=G")
            .then(function (e) { return message.channel.send({ embed: embedCreator(e.data.data.image_original_url) }); })
            .catch(function (e) { return 'Something went wrong! No pigs for you.'; });
    },
};
