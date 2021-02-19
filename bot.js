const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.token);

// Lo que hará cuando el comando start sea ejecutado
// contexto
bot.start((ctx) => {
  ctx.reply("Wenas owowowowo");
});
bot.help((ctx) => ctx.reply("Envía un sticker loko"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("Hola", (ctx) => {
  ctx.reply("Hola " + ctx.from.first_name+"!!!");
});
bot.hears("Recomienda un anime", (ctx) => ctx.reply("De qué género? owo"));
bot.hears("Gore", (ctx) => ctx.reply("Corpse party"));

bot.mention('BotFather', ctx=>{
    ctx.reply("Has mencionado a alguien");
});

bot.phone('958130409', ctx=>{
    ctx.reply('Este es un numero de telefono')
});

bot.hashtag('programming', ctx=>{
    ctx.reply('Escribiste un hashtag');
})
bot.command("quit", (ctx) => {
  //ctx.telegram.leaveChat(ctx.message.chat.id);
  ctx.leaveChat();
});

bot.command(["comando", "Comando"], (ctx) =>
  ctx.reply("Este es un comando personalizado")
);

//bot.on("text", (ctx) => {
// Explicit usage
//ctx.telegram.sendMessage(ctx.message.chat.id, `Hola ${ctx.state.role}`);

// Using context shortcut
//ctx.reply(`Hello ${ctx.state.role}`);
//});

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

bot.launch();
