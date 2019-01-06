const axios = require('axios');
const {giphyKey} = require('../config/config.json');

const embedCreator = url => ({
  color: 0x42b983,
  title: 'Oink, oink!',
  image: {
    url,
  },
});

module.exports = {
  name: 'pig',
  description: 'Oink, oink!',
  execute(message, args) {
    axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=pig&rating=G`)
      .then(e => message.channel.send({embed: embedCreator(e.data.data.image_original_url)}))
      .catch(e => 'Something went wrong! No pigs for you.');
  },
};
