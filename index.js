const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');
client.config = settings;
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const insults = require('./settings.json')


//loading messages
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Command Loaded! ${props.help.name} ;)`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.login(settings.token);