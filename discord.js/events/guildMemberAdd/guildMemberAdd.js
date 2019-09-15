/*
Copyright (c) 2019, Gilles Heinesch! Inc. All rights reserved.
Code licensed under the MIT License:
https://opensource.org/licenses/MIT
discordjs version: 11.5
*/

const Discord = require('discord.js'); // To install Discord, execute npm install discord.js
const client = new Discord.Client();

const moment = require('moment'); // To install moment, execute npm install moment

client.on('guildMemberAdd', (member) => { // guildmemberadd is the event which gets triggered if somebody joins your Discord server
  const embed = new Discord.RichEmbed() // Create a new RichEmbed
    .setAuthor(member.user.tag, member.user.displayAvatarURL) // Show the Discord tag of the new member and it's avatar
    .setTitle('Member joined') // Title of the embed
    .setDescription(`${member} ${member.guild.members.size}rd to join \ncreated ${moment(member.user.createdTimestamp, 'X').fromNow()}`) // Description of the embed
    .setTimestamp()
    .setColor('BLUE')
    .setFooter(`ID: ${member.id}`);

  message.channel.find((r) => r.name.toLowerCase() === 'name of the channel where you want to send it. Be careful, the name has to be lowercase').send({ // Send the embed to the defined channel
    embed
  });
});
