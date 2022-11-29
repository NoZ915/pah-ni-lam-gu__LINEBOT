const express = require('express')
const app = express()
const linebot = require('linebot');
// 判別開發環境
if (process.env.NODE_ENV !== 'production') {      // 如果不是 production 模式
  require('dotenv').config()                      // 使用 dotenv 讀取 .env 檔案
}
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});
const linebotParser = bot.parser();
bot.on('message', function (event) {
  console.log(event);
  if (event.message.text.includes("嗨")) {
    function randomMessageSayHi() {
      let randomMessage = [
        "哈囉我是路忻",
        "嗨嗨我是路忻",
        "安安你好我叫做路忻"
      ];
      let randomNumber = Math.floor(Math.random()) * randomMessage.length + 1;
      event.reply(randomMessage[randomNumber - 1]);
    }
    randomMessageSayHi();
  } else if (event.message.text === "0019470313") {
  } else if (event.message.text === "迎風之舞") {
  } else if (event.message.text === "圓環") {
  } else if (event.message.text === "七路交匯之圓環") {
  } else if (event.message.text === "南門路") {
  } else if (event.message.text === "檨仔林府文廟") {
  } else if (event.message.text === "到檨仔林府文廟了") {
  } else if (event.message.text === "孔廟地圖") {
  } else if (event.message.text === "HUATINN") {
  }
  else {
    event.reply("這個嘛...我不太懂欸")
  }
});
app.post('/', linebotParser);
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server start')
});