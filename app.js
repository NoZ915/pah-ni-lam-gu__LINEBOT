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
        "嗨嗨",
        "安安你好我叫做路忻"
      ];
      let randomNumber = Math.floor(Math.random() * randomMessage.length);
      event.reply(randomMessage[randomNumber]);
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
  } else if (event.message.text === "大成") {
  } else if (event.message.text === "泮") {
  } else if (event.message.text === "詩經魯頌泮水篇") {
  } else if (event.message.text === "遊泮") {
  } else if (event.message.text === "孝子祠") {
  } else if (event.message.text === "森山松之助") {
  } else if (event.message.text === "南門町二丁目") {
  } else if (event.message.text === "到臺南地方法院了") {
  } else if (event.message.text === "到台南地方法院了") {
  } else if (event.message.text === "臺南地方法院") {
  } else if (event.message.text === "台南地方法院") {
  } else if (event.message.text === "1944") {
  } else if (event.message.text === "法庭老照片") {
  } else if (event.message.text === "濾色片") {
  } else if (event.message.text === "南門町三丁目32番地") {
  } else if (event.message.text === "到湯德章大道1號了") {
  } else if (event.message.text === "YEHSHYRTAO") {
  } else if (event.message.text === "yehshyrtao") {
  } else if (event.message.text === "葉石濤文學紀念館") {
  }
  else {
    event.reply("這個嘛...我不太懂欸")
  }
});
app.post('/', linebotParser);
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server start')
});