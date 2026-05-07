const express = require("express");

const app = express();

app.get("/hello", (req, res, next) => {
  const token = "xyz";
  const isAuthorizedadmin = token === "xyz";
  if (!isAuthorizedadmin) {
    res.status(404).send("Admin not authorized");
  } else {
    next();
  }
});

app.get("/hello/getAllData", (req, res) => {
  res.send("got all data");
});

// app.get(/ab+cd/, (req, res) => {
//   res.send({ firstname: "varsha", lastname: "gowda" });
// });

// app.get("/ab*cd", (req, res) => {
//   res.send({ firstname: "varsha", lastname: "gowda" });
// });

app.listen("3000", () => {
  console.log("server up and running in 3000 posrt");
});
