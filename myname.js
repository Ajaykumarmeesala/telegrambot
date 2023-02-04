const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token
const token = '6154357311:AAGK7lB5ngaZjoiT1zDP6nuk_56KZg9i3jw';

// Create a bot instance
const bot = new TelegramBot(token, {polling: true});

console.log('Bot sent a message:', 'Hello from JavaScript Telegram Bot!');

// Listen for messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Send a message back to the user
  bot.sendMessage(chatId, 'Hello from JavaScript Telegram Bot!');
  

});
console.log('Bot sent a message:', 'Hello from JavaScript Telegram Bot!');

// Listen for messages


