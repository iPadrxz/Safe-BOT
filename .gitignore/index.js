const { Client, Message } = require("discord.js");
const { PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
}); 

client.on('message', msg => {
    if (msg.content === `${PREFIX}ping`) {
        msg.reply('Pong');
    }
});

client.login(process.env.TOKEN);
