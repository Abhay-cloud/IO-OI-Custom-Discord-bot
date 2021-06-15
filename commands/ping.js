const Discord = require("discord.js");
const ms = require("parse-ms");
exports.run = (client, message, args) => {
  
   message.channel.send('pinging... ') .then((msg) => 
      {
       setTimeout(function(){ 
      msg.edit("API Ping : " + (msg.createdTimestamp - message.createdTimestamp + "ms , " + " Bot Latency : " + `${Math.round(client.ws.ping)}` + "ms")); 
      }, 3000) }); 
       
       
  
}