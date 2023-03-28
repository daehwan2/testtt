const { WebClient } = require("@slack/web-api");
const express = require("express");
const app = express();
const port = process.env.PORT || 10011;

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const lunchList = ['몽불','쌀국수', '모리모리','짭쇼우','짬뽕','닭갈비','부대찌개','보돌미역','하숙집','닭칼국수','칼국수','김치찜','대왕전통육개장','짚신매운갈비찜','개미집','육삼정','불백'];

app.post("/", (req, res) => {
  console.log("hi");
  res.send("hello");
});

app.post("/list",(req, res)=>{
  const str = lunchList.join();
  console.log(str);
  const result = {
    text: `점심 리스트: ${str}`,
  };
  res.send(result);
})

app.post("/hi", function (req, res) {
  console.log(req.user_name);

  const randomIndex = Math.floor(Math.random() * lunchList.length);
  const result = {
    text: `오늘의 점심은 ${lunchList[randomIndex]}!!`,
  };
  res.send(result);
});

app.listen(port, () => {
  console.log("API SERVER ON");
});
