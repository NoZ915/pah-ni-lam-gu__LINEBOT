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
    event.reply("嗨你好，我叫做路忻")
  } else {
    event.reply("這個嘛...我不太懂欸")
  }
});
app.post('/', linebotParser);
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server start')
});