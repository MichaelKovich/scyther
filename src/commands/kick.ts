const embedCreator = taggedUser => ({
  color: 0x42b983,
  title: `'Bout to show ${taggedUser.username} the flowers`,
  image: {
    url: 'https://i1.wp.com/twdfansite.com/wp-content/uploads/2015/10/walking-dead-carol.jpg',
  },
});

module.exports = {
  name: 'kick',
  description: 'Kicks the user from the server.',
  execute(message, args) {
    if (!message.mentions.users.size) {
      message.reply('You need to tag a user in order to kick them!');
    }
    const taggedUser = message.mentions.users.first();
    message.channel.send({embed: embedCreator(taggedUser)});
  },
};
