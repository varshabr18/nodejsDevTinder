const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("server responded for user request");
});

app.listen("3000", () => {
  console.log("server up and running in 3000 posrt");
});
