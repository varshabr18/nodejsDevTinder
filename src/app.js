//importing the express server
const express = require("express");

//now server is ready
const app = express();

//now need to listern the server port for my reference
// i have added the console else just server listen and just blink on teminal

app.listen(3000, () => {
  console.log("server is listerning port 3000");
});

app.use("/hello/1", (req, res) => {
  res.send("hello 1 hello 1 heelo 1 ");
});

app.use("/hello", (req, res) => {
  res.send("hello hello");
});

app.use("/test", (req, res) => {
  res.send("test test");
});

// need to give the response to the user or we can say request handler
app.use("/", (req, res) => {
  res.send("hello from the server");
});
