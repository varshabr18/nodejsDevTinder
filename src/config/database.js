const mongoose = require("mongoose");

//connecting to the Database actually it returns a promise so need to add async and await

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://varshabr18_db_user:2uGNwu7s3Bf9C8WK@nodeproj.gxoqc2j.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
