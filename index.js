const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame('with boats | (??Help)');
});
client.on('message', msg => {
  if (msg.content === '??Boats') {
    msg.reply('BOATS ARE COOL!');
};
  if (msg.content === '??Think') {
    msg.reply(':thinking:');
};
if (msg.content === '??Lmao') {
  msg.reply('Boat Bot cannot process how MLG you are, Your MLG level is over 9000! AHHHH! Lmao like how nibba');
};
if (msg.content === '??GG') {
  msg.reply('Congrats, GGGGGGGGGGGGGGGGGGGGGGGG!');
};
if (msg.content === '??Cool') {
  msg.reply('Gay means happy.');
};
if (msg.content === '??Rip') {
  msg.reply('Why do you suck? R.I.P');
};
if (msg.content === '??Notice') {
  msg.reply('You have been noticed.');
};
if (msg.content === '??Sucker') {
  msg.reply('You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck, You suck.');
};
if (msg.content === '??BoatFact1') {
  msg.channel.sendMessage('Boats are vehicles that can move ontop of water.');
};
if (msg.content === '??BoatFact2') {
  msg.channel.sendMessage('Boats are boats.');
};
if (msg.content === '??BoatFact3') {
  msg.channel.sendMessage('Boats cannot fly. But boats can walk on water. 8)');
};
if (msg.content === '??Kys') {
  msg.channel.sendMessage('BoatBot is going to sleep');
};
if (msg.content === '??Fart') {
  msg.reply('How do I fart if Im a Bot? Maybe if I make a custom MP3 file and force Barney to program that into the command. Thats probably impossible with his lack of intelligence.');
};
if (msg.content === '??B') {
  msg.channel.sendMessage(':b:');
};
if (msg.content === '??Lenny') {
  msg.channel.sendMessage('( ͡° ͜ʖ ͡°)');
};
if (msg.content === '??Lonni') {
  msg.channel.sendMessage('(°  ͡ʖ ͜ ͡° ͡ )');
};
if (msg.content === 'hello') {
  msg.reply('Hello. I was expecting you. :thinking:')
};
if (msg.content === 'Hello') {
  msg.reply('Hello. I was expecting you. :thinking:')
};
if (msg.content === 'hey') {
  msg.reply('Hey there. :thinking:')
};
if (msg.content === 'Hey') {
  msg.reply('Hey there. :thinking:')
};
if (msg.content === 'back') {
  msg.reply('Welcome back. :thinking:')
};
if (msg.content === 'Back') {
  msg.reply('Welcome back. :thinking:')
};
if (msg.content === '??BarneyDaOne') {
  msg.channel.sendMessage('sUbrIBe 2 bArNEYdAoNE fOR soME fReE sAuCE!1!11!1!!11')
};
if (msg.content === '??Lol') {
  random5 = Math.floor((Math.random() * 3));
  if (random5 === 0) {
      msg.channel.sendMessage(' :b:');
  }
  if (random5 === 1) {
      msg.channel.sendMessage(' LoloLolOloLOLoloLOlolololoLOlOlOloLOLololOLOloloLoLOL');
  }
  if (random5 === 2) {
      msg.channel.sendMessage('hi');
  }
};
if (msg.content === '??Emoji') {
  random5 = Math.floor((Math.random() * 4));
  if (random5 === 0) {
      msg.channel.sendMessage(' :regional_indicator_l: :regional_indicator_e: :regional_indicator_t: :regional_indicator_s: :thinking: :regional_indicator_t: :regional_indicator_h: :regional_indicator_i: :regional_indicator_n: :regional_indicator_k: ');
  }
  if (random5 === 1) {
      msg.channel.sendMessage(' :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: :b: ');
  }
  if (random5 === 2) {
      msg.channel.sendMessage(' :regional_indicator_h: :regional_indicator_e: :regional_indicator_l: :regional_indicator_l: :regional_indicator_o: ');
  }
  if (random5 === 3) {
      msg.channel.sendMessage(' :)');
  }
};
if (msg.content === '??Life') {
  random5 = Math.floor((Math.random() * 3));
  if (random5 === 0) {
      msg.channel.sendMessage(' My brother is a sponsored yoyo player.');
  }
  if (random5 === 1) {
      msg.channel.sendMessage(' BarneyDaOne created me.');
  }
  if (random5 === 2) {
      msg.channel.sendMessage(' Im a robot.');
  }
};
if (msg.content === '??Help') {
  msg.reply({embed:{
    "title": "I have alot of commands! Look at them below!",
    "description": "If you think I'm not a boat, You need to go to a doctor.",
    "color": 49199,
    "author": {
      "name": "Boat Bot Commands",
    },
    "fields": [
      {
        "name": ":hammer_pick: Commands :hammer_pick:",
        "value": "Commands below all have to start with a `??` for these commands to work."
      },
      {
        "name": "Fun Commands",
        "value": "`??Boats` I like boats. || `??Think` I will think. || `??Lmao` I can't process how MLG you are. || `??GG` Gg? Why not. || `??Rip` You suck. || `??Sucker` You really suck. || `??Notice` I will notice you. || `??B` B. || `??Lenny` You should know what this does. || `??Lonni` Your doomed. || `??BarneyDaOne` Subscribe to my creator lmao"
      },
      {
        "name": "Random Answer Commands",
        "value": "`??BoatFact1` This is a fact about boats. || `??BoatFact2` This is a fact about boats. || `??BoatFact3` This is a fact about boats. || `??Lol` I say something. lol. || `??Emoji` I say things with emojis."
      },
      {
        "name": "No Prefix Commands",
        "value": "`Hello / hello` I respond to you! || `Hey / hey` I respond to you! || `Back / back` I respond to you!"
      }
    ]
  }
});
}});

setInterval(function() {
    random4 = Math.floor((Math.random() * 5));
    if (random4 === 0) {
        client.channels.get('351886833535418368').sendMessage('lol');
    } else if (random4 === 1) {
        client.channels.get('351886833535418368').sendMessage('boats are cool');
    } else if (random4 === 2) {
        client.channels.get('351886833535418368').sendMessage('gay means happy');
    } else if (random4 === 3) {
        client.channels.get('351886833535418368').sendMessage('so true');
    } else if (random4 === 4) {
        client.channels.get('351886833535418368').sendMessage('boats can walk on water');
    };
}, 100000);

client.login(process.env.BOT_TOKEN);
