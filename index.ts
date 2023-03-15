const { WebClient } = require("@slack/web-api");
const express = require("express");
const app = express();
const port = process.env.PORT || 10011;

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const lunchList = ['몽불','쌀국수', '메뉴3'];

app.post("/", (req, res) => {
  console.log("hi");
  res.send("hello");
});

app.post("/list",(req, res)=>{
  const str = lunchList.join();
  const result = {
    text: str,
  };
  res.send()
})

app.post("/hi", function (req, res) {
  console.log(req.user_name);

  const randomIndex = Math.floor(Math.random() * lunchList.length);
  const result = {
    text: lunchList[randomIndex],
  };
  res.send(result);
});

app.listen(port, () => {
  console.log("API SERVER ON");
});
