const Discord = require("discord.js");
const config = require("./config.json");
const data = require("./data.json");
const client = new Discord.Client();
const prefix = "!";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "today") {
    items = data.items;
    const day = new Date().toLocaleString('en-us', {  weekday: 'long' })
    const matzForToday = Object.values(items).flatMap(list => list.filter(item => item.schedule.includes(day)))
    message.reply(matzForToday.map(item => `${item.name} (${item.location})`).join("\n"))
  }
});

client.login(config.BOT_TOKEN);
