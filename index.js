const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	console.log(message.content);
	if (message.author.bot || !message.content.startsWith(prefix)) return;

	//commands
	if (message.content.toLowerCase() === '$ping') {
		message.channel.send('Pong.');
	}else if(message.content.toLowerCase() === "$hello") {
		message.channel.send('Fuck off ' + message.author.username)
		message.author.send("Fuck you bitch");
	}
	else if(message.content === '$server'){
		message.channel.send('This servers name is: ' + message.guild.name);
	}

	switch (message.content.toLowerCase()) {
		case '$ping':
			message.channel.send('Pong.');
			break;
		case "$server":

			break;
		default:
			break;
	}

});