/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

console.log('I am loaded!');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'Mzg1NDU0NDY2NDUyOTQ2OTQ0.DQBl9Q.Kd_GdtStYWIKBZWrGXPYhlB_VcI';
botMood = 0;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
  //var channel = client.servers.get("name","Descendance").defaultChannel;
  //client.sendMessage(281855305028206593,"Hello");
  //console.log(client.channels);
  server = client.guilds.find("name","Descendance");
  channel = server.channels.find("name", "bot");

  //user = client.users.find("username", "Bala");

  //console.log(user.id);
  //if(user != null)
  //{
    channel.send("Bot Online");
  //}

  //
});

// Create an event listener for messages
client.on('message', message => {

  //console.log(message);
	if(message.author.username == '090Furci')
	{
		message.channel.send('Fuck off ' + message.author.username);

	}
  else {
    if (message.author.username != 'test-bot' && (message.content == 'Hello' || message.content == 'hello') && message.channel.name == 'bot')
    {
      // Send "pong" to the same channel
      //&& message.guild.name == 'Dave'
  	if(message.member.nickname != null)
  	{
  		 message.channel.send('Hello, ' + message.member.nickname);
  	}
  	else{
  		message.channel.send('Hello, ' + message.author.username);
  	}

    }
    if (message.channel.name == 'bot' && message.content == 'disassemble') {
      // Send "pong" to the same channel
      message.channel.send('<:monkaS:380479846117277696>');
    }



    // If the message is "ping"
    if (message.channel.name == 'bot' && message.content == 'omegalul') {
      // Send "pong" to the same channel
      const lul = client.emojis.find("name", "OmegaLuL");
      message.channel.send('<:OmegaLuL:332246664440184852>');
    }

  //bad bot
    if (message.channel.name == 'bot' && (message.content == 'stupid bot' || message.content == 'bad bot'))
    {
      message.channel.send('<:FeelsBadMan:281864901050368010>');
    }

    //good bot
    if (message.channel.name == 'bot' && (message.content == 'good bot' || message.content == 'clever bot'))
    {
      message.channel.send('<:FeelsOkayMan:366002573477412865>');
    }
  }

  if (message.author.username != 'test-bot' && message.content == '!'&& message.channel.name == 'bot') {

    if (message.author.username != 'test-bot' && message.content == '!roll'&& message.channel.name == 'bot') {
    // Send "pong" to the same channel
    //&& message.guild.name == 'Dave'
      message.channel.send('Result: ' + (Math.random() * (100 - 1) + 1).toFixed(0));
    }
    else{
      message.channel.send('I dont know that command. <:FeelsBadMan:281864901050368010>');
    }
  }


  //if(message.content == 'dis')
  //{
    //client.logout();
  //}

  console.log(message.author.username);
  console.log(message.member.nickname);
  //message.channel.send(message.author.username);
  /*if (message.author === 'Griminar') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }*/
});

// Log our bot in
client.login(token);
