/*********************************************************************
 * Absolute Imports
 ********************************************************************/
import axios from 'axios';

/*********************************************************************
 * TypeScript
 ********************************************************************/
import {Message} from 'discord.js';

/*********************************************************************
 * Component
 ********************************************************************/
const embedCreator = (url: string) => ({
  color: 0x42b983,
  title: 'Here, have a dog...',
  image: {
    url
  }
});

const Dog = {
  name: 'dog',
  description: "Here's a dog.",
  execute(message: Message) {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((e: any) =>
        message.channel.send({embed: embedCreator(e.data.message)})
      )
      .catch((e: any) => 'Something went wrong! No dogs for you.');
  }
};

module.exports = Dog;
