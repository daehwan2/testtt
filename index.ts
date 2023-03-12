const { WebClient } = require("@slack/web-api");
const express = require("express");
const app = express();
const port = process.env.PORT || 10011;

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

app.post("/", (req, res) => {
  console.log("hi");
  res.send("hello");
});

app.post("/hi", function (req, res) {
  const result = {
    text: "하이 하이",
  };
  res.send(result);
});

app.listen(port, () => {
  console.log("API SERVER ON");
});
