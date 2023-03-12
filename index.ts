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
  console.log("요청왓음");
  const result = {
    text: "It's 80 degrees right now.",
  };
  res.send(result);
});

app.listen(port, () => {
  console.log("API SERVER ON");
});
