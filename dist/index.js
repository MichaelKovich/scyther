"use strict";
var fs = require('fs');
var Discord = require('discord.js');
var _a = require(__dirname + "/../config/config.json"), prefix = _a.prefix, token = _a.token;
var greetings = require(__dirname + "/utils/constants").greetings;
var commandFiles = fs.readdirSync(__dirname + "/commands").filter(function (file) { return file.endsWith('.js'); });
var client = new Discord.Client();
client.commands = new Discord.Collection();
var greetingGenerator = function (member) {
    var index = Math.floor(Math.random() * greetings.length);
    return greetings[index].replace(/member/, member);
};
for (var _i = 0, commandFiles_1 = commandFiles; _i < commandFiles_1.length; _i++) {
    var file = commandFiles_1[_i];
    var command = require(__dirname + "/commands/" + file);
    client.commands.set(command.name, command);
}
client.on('ready', function () {
    console.log('Standing By!');
});
client.on('message', function (message) {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    var args = message.content.slice(prefix.length).split(/ +/);
    var command = args.shift().toLowerCase();
    try {
        client.commands.get(command).execute(message, args);
    }
    catch (error) {
        console.log('An Error Has Occurred: ', error);
        message.reply('I encountered an error trying to execute that command.');
    }
});
client.on('guildMemberAdd', function (member) {
    var channels = ['general-text', 'lumbridge'];
    var channel = member.guild.channels.find(function (ch) { return channels.includes(ch.name); });
    if (!channel)
        return;
    channel.send(greetingGenerator(member));
});
client.login(token);
