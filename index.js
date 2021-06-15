const Discord = require("discord.js");
 const client = new Discord.Client();
const prefix = "+";
const token = "lol you can't get token"
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`IO&OI app listening at http://localhost:${port}`));
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {

if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    
    if (message.content.indexOf(prefix) !== 0) return;

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args)
    } catch (err) {
        return;
    }

})


// member add
client.on('guildMemberAdd', async member => {

  if(member.guild.id === "719177160937570346"){
  
  let sChannel = client.channels.cache.get("786883836788211722")

let embed = new Discord.MessageEmbed()
.setTitle("New Member")
.setThumbnail(member.user.displayAvatarURL({dynamic:true}))
.setColor("#FF0000")
.setDescription(`**Hey ${member.user.username}#${member.user.discriminator}, Welcome to IO&OI Official Discord Server.**
We are now ${member.guild.memberCount} members.`)
.setFooter('IO&OI YT Welcomer', member.guild.iconURL({dynamic:true}))
.setTimestamp()

sChannel.send(embed)
 
  }
})

client.login(token)