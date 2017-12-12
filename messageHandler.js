module.exports = {
  parseMessage: function(message){

    //check correct channel

    if(message.channel.name == 'bot' && message.author.username != 'Jarvis'){
      //check for ! command prefix
      if(message.content.startsWith("!")){
        //
        switch(message.content)
        {
          case "!roll":
            message.channel.send('Result: ' + (Math.random() * (100 - 1) + 1).toFixed(0));
            break;
          case "!omegalul":
            message.channel.send('<:OmegaLuL:332246664440184852>');
            break;
          default:
            message.channel.send('I dont know that command. <:FeelsBadMan:281864901050368010>');
            break;
        }
      }

      //non commands
      switch(message.content)
      {
        case "good bot":
          message.channel.send('<:FeelsOkayMan:366002573477412865>');
          break;
        case "clever bot":
          message.channel.send('<:FeelsOkayMan:366002573477412865>');
          break;
        case "bad bot":
            message.channel.send('<:FeelsBadMan:281864901050368010>');
            break;
        case "stupid bot":
            message.channel.send('<:FeelsBadMan:281864901050368010>');
            break;
        default:
            break;
      }
      //process message
    }
    else{
      //not in bot channel
    }

  }
};



/*
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

if (message.author.username != 'test-bot' && message.content.startsWith("!") && message.channel.name == 'bot') {

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
