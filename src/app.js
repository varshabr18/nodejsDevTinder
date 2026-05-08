//importing the express server
const express = require("express");

//now server is ready
const app = express();

//now need to listern the server port for my reference
// i have added the console else just server listen and just blink on teminal

app.listen(3000, () => {
  console.log("server is listerning port 3000");
});

app.post("/user", (req, res) => {
  res.send("posted data and saved in DB success");
});

app.get("/user/:userid", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "varshini", lastName: "R" });
});

app.patch("/user", (req, res) => {
  res.send("data modified success");
});

app.delete("/user", (req, res) => {
  res.send("user deleter success");
});
