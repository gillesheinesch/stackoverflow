/*
Copyright (c) 2019, Gilles Heinesch! Inc. All rights reserved.
Code licensed under the MIT License:
https://opensource.org/licenses/MIT
*/

const Discord = require('discord.js'); // To install Discord, execute npm install discord.js
const client = new Discord.Client();

const embed = new Discord.RichEmbed()
  .setColor('ORANGE')
  .setAuthor('NAME OF AUTHOR', 'PICTURE URL next to the name (little black one)')
  .setThumbnail('Thumbnail URL')
  .setImage('IMAGE Url')
  .setTitle('Welcome')
  .addField('Requirements:', '.........')
  .addField('Intro:', '......')
  .addField('Application:', '.........');

message.channel.send(`Welcome to .... \n\n To begin verification @ any rank. \n\n Text Text ${embed}`);
