const Discord =  require('discord.js');
const insults = require('../settings.json')

exports.run = (client, message, args) => {
  message.delete();
  let resultbirds = Math.floor((Math.random() * insults["insults-module"].railing_birds.length));
  if (message.member.roles.cache.has("645736795727986699")) return message.reply(insults["insults-module"].railing_birds[resultbirds])

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hi',
  description: 'Resonds with an insult',
  usage: 'hi'
};