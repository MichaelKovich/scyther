/*********************************************************************
 * Absolute Imports
 ********************************************************************/
const fs = require('fs');
const Discord = require('discord.js');

/*********************************************************************
 * Relative Imports
 ********************************************************************/
const {prefix, token} = require(`${__dirname}/../config/config.js`);
const {greetings} = require(`${__dirname}/utils/constants`);

/*********************************************************************
 * TypeScript
 ********************************************************************/
import {GuildMember, Message} from 'discord.js';

/*********************************************************************
 * Component
 ********************************************************************/
const commandFiles = fs
  .readdirSync(`${__dirname}/commands`)
  .filter((file: string) => file.endsWith('.js'));

const client = new Discord.Client();
client.commands = new Discord.Collection();

const greetingGenerator = (member: GuildMember) => {
  const index = Math.floor(Math.random() * greetings.length);
  return greetings[index].replace(/member/, member);
};

for (const file of commandFiles) {
  const command = require(`${__dirname}/commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('Standing By!');
});

client.on('message', (message: Message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  // @ts-ignore
  const command = args.shift().toLowerCase();

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.log('An Error Has Occurred: ', error);
    message.reply('I encountered an error trying to execute that command.');
  }
});

client.on('guildMemberAdd', (member: GuildMember) => {
  const channels = ['general-text', 'lumbridge'];
  const channel = member.guild.channels.find(ch => channels.includes(ch.name));
  if (!channel) return;
  // @ts-ignore
  channel.send(greetingGenerator(member));
});

client.login(token);
