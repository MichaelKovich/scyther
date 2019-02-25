const Ping = {
  name: 'ping',
  description: 'Ping!',
  execute(message: any) {
    message.channel.send('Pong.');
  }
};

module.exports = Ping;
