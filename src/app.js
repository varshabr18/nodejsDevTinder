//importing the express server
const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

//now server is ready
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("user added successfully");
});

connectDB()
  .then(() => {
    console.log("database conection established");
    app.listen(3000, () => {
      console.log("server is listening port 3000");
    });
  })
  .catch((err) => {
    console.log(err + "connection failed");
  });
