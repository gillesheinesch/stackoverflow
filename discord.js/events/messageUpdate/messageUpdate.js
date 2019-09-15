/*
Copyright (c) 2019, Gilles Heinesch! Inc. All rights reserved.
Code licensed under the MIT License:
https://opensource.org/licenses/MIT
discordjs version: 11.5
*/

const Discord = require('discord.js'); // To install Discord, execute npm install discord.js
const client = new Discord.Client();

client.on('messageUpdate', (oldMsg, newMsg) => { // messageupdate is the event which gets triggered if somebody updates a discord textmessage
  const embed = new Discord.RichEmbed() // Create a new RichEmbed
    .setColor('BLUE')
    .setTimestamp()
    .setFooter(`ID: ${oldMsg.id}`)
    .setAuthor(oldMsg.author.tag, oldMsg.author.displayAvatarURL)
    .setTitle(`Message edited in #${oldMsg.channel.name}`)
    .setDescription(`**Before:** ${oldMsg.cleanContent} \n **+After:**${newMsg.cleanContent}`);

  message.channel.find((r) => r.name.toLowerCase() === 'name of the channel where you want to send it. Be careful, the name has to be lowercase').send({ // Send the embed to the defined channel
    embed
  });
});
