/*
Copyright (c) 2019, Gilles Heinesch! Inc. All rights reserved.
Code licensed under the MIT License:
https://opensource.org/licenses/MIT
discordjs version: 11.5
*/

const Discord = require('discord.js'); // To install Discord, execute npm install discord.js
const client = new Discord.Client();

client.on('messageDelete', (msg) => { // messagedelete is the event which gets triggered if somebody deletes a discord textmessage
  const embed = new Discord.RichEmbed() // Create a new RichEmbed
    .setColor('RED')
    .setTimestamp()
    .setFooter(`ID: ${msg.id}`)
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
    .setTitle(`Message deleted in ${msg.channel.name}`)
    .setDescription(msg.cleanContent);

  message.channel.find((r) => r.name.toLowerCase() === 'name of the channel where you want to send it. Be careful, the name has to be lowercase').send({ // Send the embed to the defined channel
    embed
  });
});
