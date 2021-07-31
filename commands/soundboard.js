const Discord =  require('discord.js');
const dispatcher = require('opusscript');
const fs = require('fs');

exports.run = (client, message, args) => {
  message.delete();

  function retard() {
    fs.readdir("./sounds/", (err, files) => {
      if (err) console.error(err);
      var desc = "";

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        desc += `**${file.split(".")[0]}**\n`;
      }
      embed.addField("File Names:", desc);
      message.channel.send(embed);
    });
    return;
  }
  var embed = new Discord.MessageEmbed()
    .setTitle("Available Sounds")
    .setAuthor("You're fucking retarded");
  
  if (!args[0]) {
    retard()
    return;
  }

  if (!message.member.voice) {
    return message.reply("You're not in a vc nig");
  } else {
    message.member.voice.channel.join().then((connection) => {
      console.log(
        `${message.author.username} has issued the ${module.exports.help.name} command.`
      );
      const dispatcher = connection.play(`./sounds/${args[0]}.mp3`)
      dispatcher.on("finish", () => {
        const channel = client.channels.cache.get("817292452062167060");
        channel.join();
      });
    }).catch(console.error, err => {
      if (err) return message.channel.send(embed)
    })
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'play',
  description: 'play sound files',
  usage: 'play'
};