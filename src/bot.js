import chatbot, {getImageLink} from './utils/chatbot.js';
import {DISCORD_TOKEN} from '../secrets.js';
import {Client} from 'discord.js';

const client = new Client();
var messageTicker = 10; //How many messages before a new image is able to be triggered.
const COMMAND = '!b'; //This is the command to call the bot. It will trigger if this is anywhere in the users message.

client.on('ready', () => {
  console.log(`${client.user.username} has logged in`);
});

client.on('message', (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.toLowerCase().includes(COMMAND)) {
    const reply = chatbot(message.content.toLowerCase());
    if (reply != null) {
      message.channel.send(reply);
      if (messageTicker >= 10) {
        const imageLink = getImageLink(message.content.toLowerCase());
        if (imageLink != null) {
          message.channel.send(imageLink);
          messageTicker = 0;
        }
      } else {
        messageTicker++;
      }
    }
  }
});

client.login(DISCORD_TOKEN);
