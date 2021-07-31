const settings = require('../settings.json');
module.exports = async message => {
  if(message.channel.type === "dm") return;
  if(message.author.bot) return;

  let resultbirds = Math.floor((Math.random() * insults["insults-module"].railing_birds.length));
  let resultyoung = Math.floor((Math.random() * insults["insults-module"].young_insults.length));
  let resultshomop = Math.floor((Math.random() * insults["insults-module"].homopho_jokes.length));
  let resultsrace = Math.floor((Math.random() * insults["insults-module"].racial_insults.length));
  let resultsfat = Math.floor((Math.random() * insults["insults-module"].fat_insults.length));
  let resultsclean = Math.floor((Math.random() * insults["insults-module"].mr_clean.length));
  if (message.member.roles.cache.has("645736795727986699")) return message.reply(insults["insults-module"].railing_birds[resultbirds])
  if (message.author.username === "camryn5560") return  message.reply(insults["insults-module"].young_insults[resultyoung])
  if (message.member.roles.cache.has("776677917013835817")) return message.reply(insults["insults-module"].homopho_jokes[resultshomop])
  if (message.author.username === "PlayBoiEuropa") return  message.reply(insults["insults-module"].racial_insults[resultsrace])
  if (message.member.roles.cache.has("803386625589248010")) return  message.reply(insults["insults-module"].fat_insults[resultsfat])
  if (message.author.username === "LifeSaver666") return  message.reply(insults["insults-module"].mr_clean[resultsclean])
  if (message.author.username === "ThatBlackCuh") return  message.reply(insults["insults-module"].racial_insults[resultsrace])



  let cd = new Set();
  let cdseconds = 5;
  
  let client = message.client;  
    let prefix = settings.prefix
  if (!message.content.startsWith(prefix)) return;  
    
    let command = message.content.split(' ')[0].slice(prefix.length);
    let params = message.content.split(' ').slice(1);
    let perms = client.elevation(message);
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    if (cmd) {
      if (perms < cmd.conf.permLevel) {
        console.log("Command: ~" + cmd.help.name)
        console.log("Guild: " + message.guild.name)
        return;
      }
      cmd.run(client, message, params, perms);
      console.log("Command: -" + cmd.help.name)
      console.log("Guild: " + message.guild.name)
      if (message.author.id !== "353020749126041602"){
        if(cd.has(message.author.id)){
          message.delete();
          return message.reply("This command is for cd for 5 sec")
        }
      cd.add(message.author.id);
      }
    }
     
    setTimeout(() => {
      cd.delete(message.author.id)
    }, cdseconds * 1000)
};