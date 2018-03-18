const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login('NDE3NzE4ODk5Mzc1NzM0ODI0.DXXX9Q.QSY19ZU7j6Lwcg1Tx83zmcKmJK4');

const embed = new Discord.RichEmbed()

const CLEAR_MESSAGES = '!cc';

const Colors = require ('colors');

const prefix = '!'


bot.on ('guildMemberAdd', member => {
  var role = member.guild.roles.find ("name", ":herb: Membro")
  member.addRole (role);
})


bot.on('ready', () => {

bot.on('ready', () => {
  bot.user.setGame('eae')

})

console.log('//////////////////////////////'.green);
console.log('//            BOOT          //'.green);
console.log('//           INICIADO       //'.green);
console.log('//////////////////////////////'.green);
});
//===================================================//
//---------------------------------------------------//

bot.on('ready', () => {
  console.log('o limpador de chat esta online!'.blue);

//===================================================//
//======================================================//

//===========================================================//
///////////////////////////////////////////////////////////////
//                       LIMPARCHAT                          //
//                                                           //
///////////////////////////////////////////////////////////////
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {
          let modRole = message.guild.roles.find("name", "STAFF");
    if(!message.member.roles.has(modRole.id)) {
}
      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage(":warning: Desculpe você não tem permissão para executar esse comando :warning:  \""+message.content+"\"");
        console.log(" Você não tem permissão para executar esse comando   \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage(" :warning: Desculpe você não tem permissão para executar esse comando :warning: \""+message.content+"\"");
        console.log("Você não tem permissão para executar esse comando  \""+message.content+"\"");
        return;
      }

      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; 

            message.channel.sendMessage(message.reply(" Limpou o chat "+messagesDeleted));
            console.log(' Todas as mensagens foi deletada!  Total de mensagens deletada '+messagesDeleted)
          })
          .catch(err => {
            console.log('deu erro no bulkDelete');
            console.log(err);
          });
      }
    }
  });
});

////////////////////////////////////////////////////////
//                    AJUDA :)                        //
//                                                    //
////////////////////////////////////////////////////////
bot.on('message', message =>{
  if(message.content === '!ajuda') {
    message.reply('ok, te enviei no privado :)')
    message.author.sendMessage({embed: {
    color: 16711688,
    title: "COMANDOS",
    url: "https://discordapp.com/api/oauth2/authorize?client_id=417718899375734824&permissions=8&scope=bot",
    description: "===============================================================",
    fields: [
    {
        name: "**__!ping >>__** isso é você saber a velocidade das mensagens",
        value: "==============================================================="
      },
      {
        name: "**__!convite >>__** aqui esta o convite do discord!",
        value: "==============================================================="
      },
      {
        name: "**__!piadas >>__** caso estiver trsite você pode ficar feliz! ",
        value: "==============================================================="
      }
    ],
    timestamp: new Date(),
  }
});
  }
})
///////////////////////////////////////////////////////////////
bot.on('message', message =>{
  if(message.content === '!ajuda') {
    message.author.sendMessage({embed: {
    color: 8521178,
    title: "**__REGRAS__**",
    url: "https://discordapp.com/api/oauth2/authorize?client_id=417718899375734824&permissions=8&scope=bot",
    description: "===============================================================",
    fields: [
    {
        name: "PALAVRÃO",
        value: "As maioria das palavras ilegais já está bloqueada , más nem todas as sintaxes está bloqueadas! então caso você ecrever algum palavrão e o bot detectar você será mutado temporariamente!"
      },
      {
        name: "BANÌMENTO",
        value: "O bot não da ban por qualquer coisa , então se você não querer ser banido da guild que você está tente evitar **__ofender players, ofender staff, xingar o servidor!__**"
      },
      {
        name: "MUTADO",
        value: "Você concerteza não vai ser mutado por bobeira! caso você ser mutado concerteza procurou inflagir as regras do bot!"
      }
    ],
    timestamp: new Date(),
  }
});
  }
})
///////////////////////////////////////////////////////////////
bot.on('message', message =>{
  if(message.content === '!ajuda') {
    message.author.sendMessage({embed: {
    color: 65488,
    title: "PERMISSÃO",
    url: "https://discordapp.com/api/oauth2/authorize?client_id=417718899375734824&permissions=8&scope=bot",
    description: "===============================================================",
    fields: [
    {
        name: "STAFF",
        value: "Para obter mais permissão sobre o bot , você deve ter algum cargo na guild do Reeys! e para obter você deve entrar lá ! e os requisitos você saberá apenás lá"
      },
      {
        name: "PROGRAMADOR",
        value: "Você deve saber programar no minimo em 2 dessas linguagem: C++ , Html , JavaScript , XML , Java , Pynthon , Perl , Css , SQL entre outros!"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "©uReeysHERO"
    }
  }
});
  }
})
//===========================================================//
//ALEATORIEDADE
bot.on('message', message => {
   if (message.content === 'merda') {
    message.reply(message.author);
  }
});
//===========================================================//
bot.on('message', message => {
  if (message.content === '!convite') {
       message.reply(message.author);
    message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=417718899375734824&permissions=8&scope=bot');
  }
});
//============================================================//
bot.on('message', message => {
let responseObject = {
    "oi" :("  Como Vai Você?"),
    "facebook" : "https://www.facebook.com/jonathan.reis.7967",
    "help" : "digite !ajudas e irá aparecer todos os comandos que posso te ajudar !",
    "!frases" : "As Vezes é melhor ficar só , do que mal acompanhado! :sparkles:  ",
    "staff" : "@everyone Não Temos Vags :baby_bottle: "
};
if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}
});
//======================================================//
bot.on ('message', message =>{
  if (message.content === '!ping'){
      message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
  }
})
//========================================================//
{
bot.on ('message', message =>{
  if (message.content === 'Triste'){
    message.channel.send('Pq Está Triste? , oq posso fazer pra te ajudar?')
    message.channel.send('eu posso te enviar algumas piadas no privado ! se quiser escreve !piada1')
  }
});
bot.on ('message', message =>{
  if (message.content === '!piadas'){
    message.channel.send('')
  }
})
  //==================================================//
}
bot.on ('message', message =>{
  if(message.content === 'kkk'){
    message.author.sendMessage('https://maringapost.com.br/ahduvido/wp-content/uploads/sites/4/2016/12/0-ku-klux-klan-900x560.jpg')
    message.author.sendMessage('Fala isso não Lokão kk')
    message.author.sendMessage('Ku Klux Klan')
  }
})
//=========================================================//
///////////////////////////////////////////////
bot.on('message', message =>{
  if(message.content === '!guilds'){
    message.channel.send(`Atualmente estamos com ${bot.guilds.size} guilds online`)
  }
})

bot.on('message', message =>{
  if(message.content === "!orra"){
    let modRole = message.guild.roles.find("name", "STAFF");
    if(!message.member.roles.has(modRole.id)) {
      return message.reply("Malz você precisa de um cargo chamado STAFF ") 
    }
     message.channel.send(` eae ${message.author} kk`)
  }
})

bot.on('message', message =>{
  if(message.content === "porra"){
    message.delete();
    message.channel.send(`${message.author} que feio :(`)
  }
})

