/*********************************************************************
 * Absolute Imports
 ********************************************************************/
import axios from 'axios';

/*********************************************************************
 * Relative Imports
 ********************************************************************/
const {giphyKey} = require(`${__dirname}/../../config/config.js`);

/*********************************************************************
 * Component
 ********************************************************************/
const embedCreator = (url: string) => ({
  color: 0x42b983,
  title: 'Oink, oink!',
  image: {
    url
  }
});

const Pig = {
  name: 'pig',
  description: 'Oink, oink!',
  execute(message: any) {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=pig&rating=G`
      )
      .then((e: any) =>
        message.channel.send({
          embed: embedCreator(e.data.data.image_original_url)
        })
      )
      .catch((e: any) => 'Something went wrong! No pigs for you.');
  }
};

module.exports = Pig;
