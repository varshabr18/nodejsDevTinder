//importing the express server
const express = require("express");

const { adminAuth, userAuth } = require("./middleware/Auth");

//now server is ready
const app = express();

//now need to listern the server port for my reference
// i have added the console else just server listen and just blink on teminal

app.listen(3000, () => {
  console.log("server is listerning port 3000");
});

app.use("/admin", adminAuth);

app.use("/user", userAuth, (req, res) => {
  res.send("user data ");
});

app.use("/admin/delete", (req, res) => {
  res.send("deleted data");
});
