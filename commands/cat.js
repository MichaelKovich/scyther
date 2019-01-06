const axios = require('axios');

const embedCreator = url => ({
  color: 0x42b983,
  title: 'Here, have a cat...',
  image: {
    url,
  },
});

module.exports = {
  name: 'cat',
  description: "Here's a cat.",
  execute(message, args) {
    axios
      .get('http://aws.random.cat/meow')
      .then(e => message.channel.send({embed: embedCreator(e.data.file)}))
      .catch(e => 'Something went wrong! No cats for you.');
  },
};
