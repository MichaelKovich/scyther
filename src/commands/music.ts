// const axios = require('axios');
// const ytdl = require('ytdl-core');

// const {youtubeKey} = require('../config/config.json');

// let arr = [];
// let dispatcher = null;
// /* eslint-disable */

// module.exports = {
//   name: 'music',
//   description: 'Plays music!',
//   execute(message, args) {
//     if (args[0] === 'play') {
//       if (message.member.voiceChannel) {
//         message.member.voiceChannel
//           .join()
//           .then(connection => {
//             args.forEach((a, i) => {
//               if (i === 0) {
//                 null;
//               } else {
//                 arr.push(a);
//               }
//             });
//             arr = arr.join(' ');
//             if (dispatcher) dispatcher.destroy();
//             connection.end();
//             axios
//               .get(
//                 `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${arr}&key=${youtubeKey}`,
//               )
//               .then(e => {
//                 dispatcher = connection.playStream(
//                   ytdl(`https://youtube.com/watch?v=${e.data.items[0].id.videoId}`),
//                 );
//               });
//           })
//           .catch(e => message.reply('Sorry! I encountered an error.'));
//       } else {
//         return message.reply('You need to join a voice channel first!');
//       }
//     } else if (args[0] === 'pause') {
//       console.log('Pausing...');
//       if (dispatcher) {
//         return dispatcher.pause();
//       } else {
//         message.reply(`There's no song to pause!`);
//       }
//     } else if (args[0] === 'resume') {
//       console.log('Starting...');
//       if (dispatcher) {
//         return dispatcher.resume();
//       } else {
//         message.reply(`There's no song to start!`);
//       }
//     } else if (args[0] === 'stop') {
//       console.log('Stopping...');
//       if (dispatcher) {
//         dispatcher.destroy();
//       } else {
//         message.reply(`There's no song to start!`);
//       }
//     }
//   },
// };
