// ABSOLUTE IMPORTS
import axios from 'axios';

// TYPES
import {Message} from 'discord.js';

const embedCreator = (url: string) => ({
  color: 0x42b983,
  title: 'Here, have a cat...',
  image: {
    url,
  },
});

module.exports = {
  name: 'cat',
  description: "Here's a cat.",
  execute(message: Message) {
    axios
      .get('http://aws.random.cat/meow')
      .then((e: any) => message.channel.send({embed: embedCreator(e.data.file)}))
      .catch((e: any) => 'Something went wrong! No cats for you.');
  },
};
