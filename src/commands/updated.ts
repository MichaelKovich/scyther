/*********************************************************************
 * Absolute Imports
 ********************************************************************/
import axios from 'axios';

/*********************************************************************
 * Component
 ********************************************************************/

const getPinpadCommitHistoryURL =
  'https://api.github.com/repos/MichaelKovich/scyther/commits';

const Updated = {
  name: 'updated',
  description: 'Find out when Pinpad was last updated!',
  execute(message: any) {
    axios
      .get(getPinpadCommitHistoryURL)
      .then((e: any) => {
        const {name, date} = e.data[0].commit.author;
        const convertedDate = new Date(date).toLocaleString();
        message.channel.send(
          `I was last updated on ${convertedDate} by ${name}!`
        );
      })
      .catch(
        (e: any) => `Something went wrong! Maybe it's time for another update.`
      );
  }
};

module.exports = Updated;
