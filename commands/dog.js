const axios = require('axios');

const embedCreator = url => ({
  color: 0x42b983,
  title: 'Here, have a dog...',
  image: {
    url,
  },
});

module.exports = {
  name: 'dog',
  description: "Here's a dog.",
  execute(message, args) {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(e => message.channel.send({embed: embedCreator(e.data.message)}))
      .catch(e => 'Something went wrong! No dogs for you.');
  },
};
