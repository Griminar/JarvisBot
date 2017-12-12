/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');
var handler = require('./messageHandler');
var xml2js = require('xml2js');
var fs = require('fs');



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
    //channel.send("Bot Online");
  //}

  //
});

// Create an event listener for messages
client.on('message', message => {

handler.parseMessage(message);

});

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/test.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result);
        console.log('Done');
    });
});

// Log our bot in
client.login(token);
